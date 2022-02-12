import React from 'react';
import ReactDOM from 'react-dom';
import { store, StoreContext } from '@/store';
import { Home } from '@/pages';

import '@/assets/styles/common.css';

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <Home />
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
