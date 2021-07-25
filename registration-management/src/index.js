import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Routers from './Routers';

ReactDOM.render(
  <Routers>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Routers>,
  document.getElementById('root')
);

