import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ReactSVG from 'react-svg'
import Logo from '../../assets/logos/primary-logo.svg'
import MainNavigation from './MainNavigation'
import './Header.css'
const SVG = require('svg.js')



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
    
    render(props) {
      return (
        <div>
          <MainHeader>
            {this.props.isLoggedIn ?
              <Link to={`/profile/${this.props.user._id}`}>
                <ReactSVG src={Logo} className='main-logo' />
              </Link>
              :
              <Link to='/'>
                <ReactSVG src={Logo} className='main-logo' />
              </Link>
            }
            <MainNavigation user={this.props.user} changeApp={this.props.changeApp} handleMouseDown={this.handleMouseDown} navVisibility={this.state.visible} />
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
