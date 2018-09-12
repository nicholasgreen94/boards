import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/logos/primary-logo.svg'
import './Header.css'


class Header extends Component {
  render() {
    return (
      <Link to='/'><img src={Logo} alt='boards logo, the words boards surrounded by a box' /></Link>
    )
  }
}


export default Header
