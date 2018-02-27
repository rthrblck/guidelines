import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Button from '../Button';

// const Button = ({
//     variant, disabled, children
// }) => <button disabled={disabled}>{children}</button>

// const Button = (props) => (
//   <button
//     disabled={props.disabled}
//     onClick={props.onClick}
//   >
//     {props.children}
//   </button>
// );



storiesOf('Button', module)

  .add('default state', () => (
    <div>
      <Button
        onClick={action('clicked')}
      >
        Button
      </Button>
    </div>
  ))

  .add('active state', () => (
    <div>
      <Button variant = "active">Super Button</Button>
    </div>
  ))

  .add('disabled state', () => (
    <div>
      <Button disabled = {true}>Super Button</Button>
    </div>
  ))
  ;
