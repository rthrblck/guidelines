import React from 'react';
import MuiButton from 'material-ui/Button';

function doSomething(event) {
  // eslint-disable-next-line no-console
  console.log(event.currentTarget.getAttribute('data-something'));
}

class Button extends React.Component {

  state = {
    backgroundColor: 'grey',
    borderColor: 'black',
    color: 'black',
  }

  myOnClick =(event) => {
    this.props.onClick(event)
    this.setState ({
      backgroundColor: 'black',
      borderColor: 'grey',
      color: 'white',
    });
  }

  render() {
    return (
      <MuiButton
        {...this.props}
        onClick={this.myOnClick}
        style= {{
          backgroundColor: this.state.backgroundColor,
          borderColor: this.state.borderColor,
          color: this.state.color,
        }}
      />
    );
  }
}

export default Button;
