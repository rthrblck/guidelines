import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Card from '../Card';

// Temp Card wrapped in a MuiThemeProvider & Layout faking a sidebar
const SidebarCard = (props) => (
  <MuiThemeProvider>
    <div style={{width: 200}}>
      <Card {...props}/>
    </div>
  </MuiThemeProvider>
);
// Temp Card wrapped in a MuiThemeProvider
const FullCard = (props) => (
  <MuiThemeProvider>
    <Card {...props}/>
  </MuiThemeProvider>
);

const mock_btns = [
  { label: 'btn 1', onClick: action('you clicked btn 1') },
  { label: 'btn 2', onClick: action('you clicked btn 2') },
]

storiesOf('Card', module)
  .add('default state, full', () => (
    <FullCard />
  ))
  .add('default state, sidebar', () => (
    <SidebarCard />
  ))
  .add('funky body, sidebar', () => (
    <SidebarCard body="funky text" />
  ))
  .add('with btns, sidebar', () => (
    <SidebarCard btns={mock_btns} />
  ))
  ;
