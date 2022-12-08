import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
