import React from 'react';
import ReactDOM from 'react-dom';
import Providers from "./providers";

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>
);

reportWebVitals();
