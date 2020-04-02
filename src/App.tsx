import React from 'react';
import { Router } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { setConfig } from 'react-hot-loader';

import GlobalStyle from './styles/global';
import Routes from './routes';
import history from './services/history';

setConfig({
  showReactDomPatchNotification: false,
});

function App() {
  return (  
    <Router history={history}>
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
