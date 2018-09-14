import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/logos/primary-logo.svg'
import MainNavigation from './MainNavigation'
import './Header.css'


class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
      this.toggleMenu = this.toggleMenu.bind(this)
      this.handleMouseDown = this.handleMouseDown.bind(this)
    }

    toggleMenu() {
      this.setState({
        visible: !this.state.visible
      })
    }

    handleMouseDown(e) {
      this.toggleMenu()
      e.stopPropagation()
    }

    render() {
      return (
        <div>
          <MainHeader>
            <Link to='/'><img src={Logo} alt='boards logo, the words boards surrounded by a box' className='main-logo' /></Link>
            <MainNavigation handleMouseDown={this.handleMouseDown} navVisibility={this.state.visible} />
          </MainHeader>
        </div>
      )
    }
}

export default Header

const MainHeader = styled.header`
  margin-top: 24px;
  position: relative;
`
