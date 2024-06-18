import { useAppSelector } from "../../hooks/redux";
import ProfilePopUp from "./ProfilePopUp";

import SearchForm from "./SearchForm";
import Button from "../Global/Button";
import ModalComponent from "../../common/Modal";
import { memo, useState } from "react";
import SignUpPopUp from "./SignUpPopUp";
import LoginPopUp from "./LoginPopUp";
import NotificationComponent from "../Notification";
import Logo from "../Icons/Logo";
import { IconMusic } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

enum ModalAction {
  Login,
  SignUp,
}

const Header = () => {
  const navigate = useNavigate()
  const authState = useAppSelector((state) => state.auth.userInfo);
  const [showModal, setShowModal] = useState<boolean>(false);

  const [modalAction, setModalAction] = useState<ModalAction>(
    ModalAction.Login
  );

  const handleChangeModalAction = (data: ModalAction) => {
    setShowModal(true);
    setModalAction(data);
  };

  return (
    <>
      <header className="sticky top-0 z-999 flex h-20 min-h-20 w-full gap-2 drop-shadow-1 items-center justify-between px-2 md:px-0 md:pr-12">
        <div  
        onClick={()=>navigate("/")}
        className="block md:hidden w-10 h-10">
          <Logo isFull={true} />
        </div>

        <div className="flex flex-1 max-w-150 items-center justify-start gap-2">
          <SearchForm />
        </div>
        <div className="flex items-center gap-1">
          {!authState?.id && (
            <Button
              classes="px-3 py-2 font-medium hover:text-primary-100 "
              onclick={() => handleChangeModalAction(ModalAction.Login)}
              title="Đăng nhập"
            />
          )}
          {!authState?.id && (
            <div className="h-5 border-[1px] border-primary-100 " />
          )}
          {!authState?.id && (
            <Button
              classes="px-3 py-[7px] font-medium hover:text-primary-100"
              onclick={() => handleChangeModalAction(ModalAction.SignUp)}
              title="Đăng ký"
            />
          )}

          <div onClick={()=>navigate("library")} className="flex md:hidden w-10 h-10  items-center justify-center">
            <IconMusic stroke={1.5} />
          </div>
          {authState?.id && <NotificationComponent />}
          {authState?.id && <ProfilePopUp />}
        </div>
      </header>
      {showModal && (
        <ModalComponent hideModal={() => setShowModal(false)}>
          <div className="my-5 mx-3">
            {modalAction == ModalAction.SignUp ? (
              <SignUpPopUp
                hideModal={() => setShowModal(false)}
                changeModalAction={() => setModalAction(ModalAction.Login)}
              />
            ) : (
              <LoginPopUp
                hideModal={() => setShowModal(false)}
                changeModalAction={() => setModalAction(ModalAction.SignUp)}
              />
            )}
          </div>
        </ModalComponent>
      )}
    </>
  );
};

export default memo(Header);
