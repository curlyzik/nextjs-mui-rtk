'use client';

import React from 'react';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';

const MuiTheme: React.FC<React.PropsWithChildren> = ({ children }) => {
  const muitheme = createTheme({
    typography: {
      fontFamily: ['Manrope'].join(','), //Update fonts for MUI Components
    },
  });
  return <ThemeProvider theme={muitheme}>{children}</ThemeProvider>;
};

export default MuiTheme;
