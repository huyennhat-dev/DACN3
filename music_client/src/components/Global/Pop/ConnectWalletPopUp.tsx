import React, { useEffect, useState } from "react";
import { message } from "antd";
import Web3 from "web3";
import authApi from "../../../api/auth.api";
import { useAppDispatch } from "../../../hooks/redux";
import { setToken } from "../../../redux/features/authSlice";
import Button from "../Button";
import { isValidEthereumAddress } from "../../../utils/validate";

const ConnectWalletPopUp = ({ hideModal }: { hideModal: () => void }) => {
    const dispatch = useAppDispatch();

    const [listAddress, setListAddress] = useState<string[]>([]);
    const [searchResult, setSearchResult] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>("");

    const handleConnectWallet = async (): Promise<string[]> => {
        return new Promise(async (resolve, reject) => {
            if (window.ethereum) {
                window.web3 = new Web3(window.ethereum);
                try {
                    const accounts = await window.ethereum.request({
                        method: "eth_requestAccounts",
                    });
                    resolve(accounts);
                } catch (error: any) {
                    message.warning(error.message);
                    console.error("User denied account access", error);
                    reject(error);
                }
            } else if (window.web3) {
                window.web3 = new Web3(window.web3.currentProvider);
                console.log("Web3 is injected into the browser");
                resolve([]);
            } else {
                message.warning("Không tìm thấy MetaMask. Vui lòng cài đặt MetaMask!");
                reject(new Error("MetaMask not found"));
            }
        });
    };

    const updateWalletAddress = async (wallet_address: string) => {
        try {
            const response: any = await authApi.update({ wallet_address });
            dispatch(setToken({ token: response.accessToken }));
            message.success("Kết nối Meta Mask thành công!");
        } catch (err: any) {
            message.error(err.response.data.message);
        }
    };

    const handleClickConnectWalletButton = async () => {
        const accounts = await handleConnectWallet();
        setListAddress(accounts);
    };

    useEffect(() => {
        const filteredItems = listAddress.filter((item) =>
            item.includes(inputValue)
        );

        console.log("Các mục lọc ra từ listAddress:", filteredItems);

        setSearchResult(filteredItems);
    }, [inputValue, listAddress]);

    const handleClickContinueButton = async () => {
        if (!isValidEthereumAddress(inputValue)) {
            return message.warning("Địa chỉ ví không hợp lệ!")
        }

        await updateWalletAddress(inputValue);
        hideModal()
    };
    return (
        <div className="my-4 mx-3 min-w-100 min-h-50 flex flex-col items-center justify-center gap-5 transition-all duration-300 ease-in-out">
            <h5 className="font-medium text-xl my-2">
                Bạn chưa kết nối địa chỉ ví MetaMask
            </h5>

            {listAddress.length > 0 && (
                <div className="w-full px-3">
                    <input
                        type="text"
                        name="my-wallet-address"
                        id="my-wallet-address"
                        value={inputValue || ""}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Nhập dịa chỉ ví của bạn"
                        className="shadow mb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {searchResult.map((item) => (
                        <div className="flex gap-2 items-center my-1">
                            <input
                                checked={item == inputValue}
                                id={item}
                                type="radio"
                                name="wallet-address"
                                value={item}
                                onChange={(e) => setInputValue(e.target.value)}

                            />
                            <label htmlFor={item}>{item}</label>
                        </div>
                    ))}
                    {searchResult.length <= 0 && (
                        <div className="flex gap-2 items-center my-1">
                            <p>
                                Địa chỉ của bạn không tồn tại trong thiết bị, bạn phải thêm nó
                                vào MetaMask trước.
                            </p>
                        </div>
                    )}
                </div>
            )}

            {listAddress.length <= 0 && (
                <Button
                    onclick={handleClickConnectWalletButton}
                    title="Kết nối ví MetaMask"
                    classes={`w-full py-3 px-2 text-white text-base font-medium rounded-xl bg-primary-300 `}
                />
            )}
            {listAddress.length > 0 && (
                <Button
                    onclick={handleClickContinueButton}
                    title="Tiếp tục"
                    classes={`w-full py-3 px-2 text-white text-base font-medium rounded-xl bg-primary-300 `}
                />
            )}
        </div>
    );
};

export default ConnectWalletPopUp;
