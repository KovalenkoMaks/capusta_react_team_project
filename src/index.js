import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { GoogleOAuthProvider } from '@react-oauth/google';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="248019557390-vnff5qgspqd9uqvmbja59o5tpm96t1qu.apps.googleusercontent.com">
    {/* <React.StrictMode> */}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="capusta_react_team_project">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
    {/* </React.StrictMode> */}
  </GoogleOAuthProvider>
);
