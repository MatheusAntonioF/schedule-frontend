import React from 'react';

import 'antd/dist/antd.css';

import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './GlobalStyles';
import { darkTheme } from './themes/dark';

const DefaultStyles: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export { DefaultStyles };
