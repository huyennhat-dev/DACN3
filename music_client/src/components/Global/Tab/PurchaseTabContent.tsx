import React, { useEffect, useRef, useState } from 'react'
import useQuery from '../../../hooks/useQuery';
import { sound } from '../../../utils/types';
import soundApi from '../../../api/sound.api';
import { TabList } from '../../../pages/Library';
import TrackItem from '../TrackItem';

const PurchaseTabContent = () => {
    const query = useQuery();
    const tab = query.get('tab');
    const limit = 20;

    const [sounds, setSounds] = useState<sound[]>([]);
    const [page, setPage] = useState<number>(1);
    const [reachedEnd, setReachedEnd] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const getSoundsData = () => {
        const params = {
            limit,
            page,
        };
        soundApi.getSoundByBuyer(params).then((rs: any) => {
            setSounds((prevSounds) => {
                const existingIds = new Set(prevSounds.map(sound => sound._id));
                // Lọc những item từ rs.data mà id của chúng chưa tồn tại trong existingIds
                const newSounds = rs.data.filter((sound:sound) => !existingIds.has(sound._id));
                return [...prevSounds, ...newSounds];
            });

            if (rs.data.length < limit) {
                setReachedEnd(true);
            }
        });
    };

    const handleScroll = () => {
        if (
            containerRef.current &&
            containerRef.current.scrollHeight - containerRef.current.clientHeight ==
            Math.round(containerRef.current.scrollTop)
        ) {
            if (!reachedEnd) {
                setPage((prevPage) => prevPage + 1);
            }
        }
    };

    useEffect(() => {
        if (tab == TabList.Purchase || tab == null)
            getSoundsData();
    }, [page, tab]);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.addEventListener("scroll", handleScroll);
            return () => {
                if (containerRef.current) {
                    containerRef.current.removeEventListener("scroll", handleScroll);
                }
            };
        }
    }, [])

    return (
        <div
            className="h-full overflow-y-auto overflow-hidden hide-scroll"
            ref={containerRef}
        >

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 ">
                {sounds.map((item) => (
                    <div key={item._id} className="flex gap-2">
                        <TrackItem key={item._id} sound={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PurchaseTabContent
