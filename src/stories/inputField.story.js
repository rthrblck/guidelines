import React from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import { storiesOf } from '@storybook/react';
import MyTextField from '../inputField';

const theme = createMuiTheme({
  typography: {
    fontSize: 20,
  },
});

storiesOf('inputField', module)
  .add('initial', () => (
    <MuiThemeProvider theme={theme}>
      <MyTextField />
    </MuiThemeProvider>
  ));
