import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { BrowserRouter } from 'react-router-dom';
import { AudioProvider } from './context/AudioContext.tsx';
import { ModalProvider } from './context/ModalContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
        <ModalProvider>
          <AudioProvider>
            <App />
          </AudioProvider>
        </ModalProvider>
    </Provider>
  </BrowserRouter>
)


