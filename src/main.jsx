import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { Provider } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

import { store } from './app/store';

import App from './app';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <HelmetProvider>
      <BrowserRouter>
        <Suspense>
          <ToastContainer />
          <App />
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </Provider>
);
