import { Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { routes } from "./routes";
import PageTitle from "./components/Global/PageTitle";
import Loader from "./common/Loader";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { getToken } from "./utils/tokenUtils";
import {
  logoutAsync,
  setBalance,
  setTokenAsync,
} from "./redux/features/authSlice";
import { toggleLoading } from "./redux/features/loadingSlice";
import Player from "./components/Player";
import { getBalance } from "./utils";
import ModalComponent from "./common/Modal";

import ConnectWalletPopUp from "./components/Global/Pop/ConnectWalletPopUp";

function App() {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const isLoading = useAppSelector((state) => state.loading.isLoading);
  const uInfo = useAppSelector((state) => state.auth.userInfo);

  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const checkToken = async () => {
    dispatch(toggleLoading(true));
    try {
      const token = getToken();
      if (token) {
        await dispatch(setTokenAsync(token));
        const balance = await getBalance();
        if (balance !== null) {
          dispatch(setBalance({ balance: Number(balance) }));
        }
      } else {
        await dispatch(logoutAsync());
      }
    } catch (error) {
      console.error("Error while checking token:", error);
    } finally {
      dispatch(toggleLoading(false));
    }
  };
  useEffect(() => {
    checkToken();
  }, [dispatch]);


  useEffect(() => {
    if (uInfo && !uInfo.wallet_address) {
      setShowModal(true);
    }
  }, [uInfo]);

  return (
    <>
      {isLoading && <Loader />}
      <Suspense fallback={<Loader />}>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.url}
              path={route.url}
              element={
                <>
                  <PageTitle title={route.pageTitle} />
                  {<route.component />}
                </>
              }
            />
          ))}
        </Routes>
      </Suspense>
      <Player />
      {showModal && (
        <ModalComponent hideModal={() => setShowModal(false)}>
          <ConnectWalletPopUp hideModal={() => setShowModal(false)}/>
        </ModalComponent>
      )}
    </>
  );
}

export default App;
