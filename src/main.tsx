import './index.css';

import { ConfigProvider } from 'antd';
import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './index';

const rootElement: HTMLElement = document.getElementById('root')!;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#6d28d9',
          colorInfo: '#6d28d9',
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
