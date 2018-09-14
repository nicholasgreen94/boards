import React, { Component } from 'react'
import './Button.css';

class Button extends Component {
  render(props) {
    return (
      <button className='orange-btn'>
        {this.props.children}
      </button>
    )
  }
}

export default Button
