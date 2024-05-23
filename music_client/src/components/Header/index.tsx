import React, { startTransition, useEffect, useState } from "react";
import SignUpPopUp from "./SignUpPopUp";
import LoginPopUp from "./LoginPopUp";
import { useAppSelector } from "../../hooks/redux";
import ProfilePopUp from "./ProfilePopUp";
import IconButton from "../Global/IconButton";
import {
  IconArrowBack,
  IconArrowLeft,
  IconArrowRight,
} from "@tabler/icons-react";
import { useLocation, useNavigate } from "react-router-dom";
import SearchForm from "./SearchForm";

const Header = () => {
  const authState = useAppSelector((state) => state.auth.userInfo);

  const [showButton, setShowButton] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setCanGoBack(window.history.state?.idx > 0);
      setCanGoForward(window.history.state?.idx < window.history.length - 2);
    };

    handlePopState();
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [location]);

  return (
    <>
      <header className="sticky top-0 z-999 flex h-20 min-h-20 w-full gap-2 drop-shadow-1 items-center justify-between pr-12">
        <div className="flex items-center justify-start gap-2">
          {/* <IconButton
            icon={<IconArrowLeft />}
            onClick={() =>
              canGoBack ? startTransition(() => navigate(-1)) : null
            }
            className={`${!canGoBack && 'text-primary-300 hover:text-primary-300 hover:bg-grey-100 cursor-default'}`}
          />
          <IconButton
            icon={<IconArrowRight />}
            onClick={() =>
              canGoForward ? startTransition(() => navigate(+1)) : null
            }
            className={`${!canGoForward && 'text-primary-300 hover:text-primary-300 hover:bg-grey-100 cursor-default'}`}
          /> */}
          <SearchForm />
        </div>
        <div className="flex items-center gap-2">
          {!authState?.id && (
            <LoginPopUp showButton={showButton} setShowButton={setShowButton} />
          )}
          {!authState?.id && (
            <SignUpPopUp
              showButton={showButton}
              setShowButton={setShowButton}
            />
          )}
          {authState?.id && <ProfilePopUp />}
        </div>
      </header>
    </>
  );
};

export default Header;
