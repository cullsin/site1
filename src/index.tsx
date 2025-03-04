import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/index';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename='/'>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
  </React.StrictMode>);
