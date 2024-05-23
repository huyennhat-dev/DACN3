import { Suspense, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { routes } from './routes';
import PageTitle from './components/Global/PageTitle';
import Loader from './common/Loader';
import './App.css'
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { getToken } from './utils/tokenUtils';
import { logoutAsync, setBalance, setTokenAsync } from './redux/features/authSlice';
import { toggleLoading } from './redux/features/loadingSlice';
import Player from './components/Player';
import { getBalance } from './utils';


function App() {
  const dispatch = useAppDispatch()
  const { pathname } = useLocation();

  const isLoading = useAppSelector((state) => state.loading.isLoading)

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
      console.error('Error while checking token:', error);
    } finally {
      dispatch(toggleLoading(false));
    }
  };
  useEffect(() => {
    checkToken();
  }, [dispatch]);


  return (<>
    {isLoading && <Loader />}
    <Suspense fallback={<Loader />} >
      <Routes>
        {
          routes.map((route) => (
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
          ))
        }

      </Routes>
    </Suspense>
    <Player />

  </>)

}

export default App;

