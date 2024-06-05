import React, { ChangeEvent, useState } from "react";
import ImgCrop from "antd-img-crop";
import { Button, Input, Select, Upload, message } from "antd";
import { IconUpload } from "@tabler/icons-react";
import { hashTagOptions } from "../api/_mock";
import { Process, processType, uploadData } from "../utils/types";
import UploadProcessBar from "../components/Global/UploadProcessBar";
import soundApi from "../api/sound.api";
const initialData: uploadData = {
    name: "",
    sound: "",
    photo: null,
    lyric: "",
    hashTag: [],
    price: 0,
};

const UploadSound = () => {
    const [uploadData, setUploadData] = useState<uploadData>(initialData);
    const [processData, setProcessData] = useState<processType[]>([]);
    const [audioSrc, setAudioSrc] = useState<string | null>(null);
    const [lyricSrc, setLyricSrc] = useState<any>(null);

    const getBase64 = (file: File, callback: (result: string) => void) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const base64String = reader.result as string;
            callback(base64String);
        };
    };

    const handleUpdateState = (value: any, key: string) => {
        setUploadData((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleChangeImage = (info: any) => {
        if (info.file.status === "error") {
            getBase64(info.file.originFileObj, (base64Data) => {
                handleUpdateState(base64Data, "photo");
            });
        }
    };

    const handleChangeSound = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const audio = new Audio();
            audio.src = URL.createObjectURL(file);
            setAudioSrc(audio.src);
            audio.addEventListener("loadedmetadata", () => {
                if (audio.duration >= 30) {
                    getBase64(file, (base64Data) => {
                        handleUpdateState(base64Data, "sound");
                        message.success("Tải file thành công!");
                    });
                } else {
                    message.warning("File quá ngắn, tối thiểu là 30s");
                }
            });
        }
    };

    const handleChangeLyric = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setLyricSrc(e.target!.result);
            };
            reader.readAsText(file);

            getBase64(file, (base64Value) => handleUpdateState(base64Value, "lyric"));
        }
    };

    const handleUpdateProcessData = (data: processType) => {
        setProcessData((prevData) => [data, ...prevData]);
    };

    const handleUpload = async () => {
        if (!uploadData.name || !uploadData.photo || !uploadData.sound) {
            return message.warning("Dữ liệu quan trọng không được bỏ trống!");
        }
        try {
            const sid = Date.now().toString();
            let percent = 0;

            const handleUpdateProcessStatus = (id: string, newData: Partial<processType>) => {
                setProcessData((prevData) => {
                    const newDataArray = prevData.map((item) => {
                        if (item.id === id) {
                            return { ...item, ...newData };
                        }
                        return item;
                    });
                    return newDataArray;
                });
            };

            const config = {
                onUploadProgress: (progressEvent: ProgressEvent) => {
                    const { loaded, total } = progressEvent;
                    percent = Math.floor((loaded * 100) / total);
                    handleUpdateProcessStatus(sid, { process: percent });
                    if (percent === 100) {
                        handleUpdateProcessStatus(sid, { status: Process.Success });
                    }
                },
            };

            handleUpdateProcessData({
                id: sid,
                name: uploadData.name,
                photo: uploadData.photo,
                process: percent,
                status: Process.Pending,
            });

            soundApi.create({ data: uploadData, processFunc: config.onUploadProgress }).then((rs: any) => {
                message.success(rs.message);
            })
            setUploadData(initialData);
            setAudioSrc("")
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteProcess = (id: string) => {
        setProcessData((prevData) => {
            return prevData.filter((item) => item.id != id);
        });
    }


    return (
        <>
            {processData.length > 0 && (
                <div className="mr-5 mb-5">

                    {processData.map((item, index) => (
                        <div key={index} className="process-item mb-1">
                            <UploadProcessBar
                                name={item.name}
                                photo={item.photo}
                                process={item.process}
                                status={item.status}
                                onClick={() => handleDeleteProcess(item.id!)}
                            />
                        </div>
                    ))}
                </div>
            )}
            <div className="mr-5 h-full">
                <div className=" bg-white py-2 px-6 rounded grid grid-cols-1 md:grid-cols-2 gap-3 text-grey-600">
                    <div className="text-start p-3">
                        <div className="w-full ">
                            <p className="text-grey-600 my-3">
                                Chọn thumbnail cho bản nhạc
                            </p>
                            <label
                                htmlFor="upload-photo"
                                className="cursor-pointer inline-block  w-50 h-50"
                            >
                                {uploadData.photo ? (
                                    <img
                                        className="rounded w-50 h-50 object-cover"
                                        src={uploadData.photo}
                                        alt=""
                                    />
                                ) : (
                                    <div className="rounded-lg w-50 h-50 border-grey-500/30 border-[1.5px] flex items-center justify-center">
                                        <IconUpload
                                            strokeWidth={1.5}
                                            size={50}
                                            className="text-grey-500"
                                        />
                                    </div>
                                )}
                            </label>
                            <ImgCrop rotationSlider showGrid aspect={1} quality={1}>
                                <Upload
                                    onChange={handleChangeImage}
                                    className="hidden"
                                    id="upload-photo"
                                    accept="image/*"
                                >
                                    <div>chon anh</div>
                                </Upload>
                            </ImgCrop>
                        </div>
                        <div className="w-full my-6 flex items-center justify-start gap-2">
                            <div>
                                <p className="mb-2">Chọn file nhạc:</p>
                                <label htmlFor="sound">
                                    <div className="px-3 py-[2px] border-[1.5px] border-grey-500/30 rounded text-sm cursor-pointer hover:border-primary-50/50">
                                        {audioSrc ? "Chọn file khác" : "Click chọn file"}
                                    </div>
                                </label>
                                <input
                                    type="file"
                                    name="sound"
                                    id="sound"
                                    accept="audio/*"
                                    onChange={handleChangeSound}
                                    className="hidden"
                                />
                            </div>

                            {audioSrc && <audio controls src={audioSrc} />}
                        </div>
                        <div className="w-full my-6 flex items-center justify-start gap-2">
                            <div>
                                <p className="mb-2">Chọn file lyric:</p>
                                <label htmlFor="lyric">
                                    <div className="px-3 py-[2px] border-[1.5px] border-grey-500/30 rounded text-sm cursor-pointer hover:border-primary-50/50">
                                        {lyricSrc ? "Chọn file khác" : "Click chọn file"}
                                    </div>
                                </label>
                                <input
                                    type="file"
                                    name="lyric"
                                    id="lyric"
                                    onChange={handleChangeLyric}
                                    className="hidden"
                                />
                            </div>
                        </div>
                        {lyricSrc && (
                            <div className="w-full border-[1.5px] p-2 rounded overflow-y-auto overflow-x-hidden">
                                <pre className=" overflow-x-hidden ">{lyricSrc}</pre>
                            </div>
                        )}
                    </div>
                    <div className="text-start p-3">
                        <div className="w-full my-3">
                            <label htmlFor="sound-name">Tiêu đề bản nhạc:</label>
                            <Input
                                type="text"
                                id="sound-name"
                                value={uploadData.name || ""}
                                onChange={(e) => handleUpdateState(e.target.value, "name")}
                                placeholder="Nhập tiêu đề"
                                className="focus:border-primary-50 my-2 hover:border-primary-50 active:border-primary-200"
                            />
                        </div>
                        <div className="w-full my-3">
                            <label htmlFor="sound-price">
                                Giá bạn muốn (
                                <span className="italic">
                                    để trống nó nếu bạn muốn chia sẻ miễn phí
                                </span>
                                ):
                            </label>
                            <Input
                                min={0}
                                id="sound-price"
                                type="number"
                                value={uploadData.price || 0}
                                onChange={(e) =>
                                    handleUpdateState(Number(e.target.value), "price")
                                }
                                placeholder="Nhập tiêu đề"
                                className="focus:border-primary-50 my-2 hover:border-primary-50 active:border-primary-200"
                            />
                        </div>

                        <div className="w-full my-3">
                            <label htmlFor="sound-tag">Hash Tag:</label>
                            <Select
                                mode="multiple"
                                style={{ width: "100%" }}
                                value={uploadData.hashTag}
                                placeholder="Hash tag"
                                onChange={(value) => {
                                    setUploadData((prev) => ({
                                        ...prev,
                                        hashTag: value,
                                    }));
                                }}
                                options={hashTagOptions}
                                className="focus:border-primary-50 my-2 hover:border-primary-50 active:border-primary-200"
                            />
                        </div>
                        <div className="w-full text-center my-3">
                            <Button onClick={handleUpload} ghost danger type="primary">
                                Tải lên
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UploadSound;
