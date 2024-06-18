import { useState } from "react";
import { useAppSelector } from "../../hooks/redux";

import { formatCoin } from "../../utils/format";
import { Popover } from "antd";
import ProfileMenu from "./ProfileMenu";
import { env } from "../../configs/env";
import { handleImageError } from "../../utils";

declare global {
  interface Window {
    ethereum?: any;
    web3?: any;
  }
}

const ProfilePopUp = () => {
  const info = useAppSelector((state) => state.auth.userInfo);
  const balance = useAppSelector((state) => state.auth.balance);

  const [visiblePopOver, setVisiblePopOver] = useState(false);

  const hidePopover = () => {
    setVisiblePopOver(false);
  };

  const handleVisibleChange = (newVisible: boolean) => {
    setVisiblePopOver(newVisible);
  };

  return (
    <>
      <Popover
        placement="bottom"
        trigger={"click"}
        content={<ProfileMenu hidePopover={hidePopover} />}
        open={visiblePopOver}
        onOpenChange={handleVisibleChange}
      >
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-1w-10 rounded-full bg-primary00 flex cursor-pointer">
            <img
              src={env.apiUrl+"/static/"+info?.photo}
              alt=""
              onError={handleImageError}
              className="m-auto rounded-full object-cover w-10 h-1w-10"
            />
          </div>
          <div className="hidden sm:block">
            <p className="font-semibold">{info?.fullName}</p>
            <p className="text-xs text-[#e19435]">
              {formatCoin(balance, "EUR")}
            </p>
          </div>
        </div>
      </Popover>
    </>
  );
};

export default ProfilePopUp;
