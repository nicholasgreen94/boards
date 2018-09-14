import React, { Component } from 'react';
import { Switch, Link } from 'react-router-dom'


class MainNavigation extends Component {
    render() {
      let isNavShown = 'hidden'
      if (this.props.navVisibility) {
        isNavShown = 'active'
      }
      return (
        <div>
          <div id='menu-icon' className={isNavShown} onClick={this.props.handleMouseDown}>
            <span></span>
          </div>
          <nav id='menu' className={isNavShown} onClick={this.props.handleMouseDown}>
            <Switch>
              <ul className='navigation'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/sign-up' className='sign-up'>Sign Up</Link></li>
              </ul>
            </Switch>
          </nav>
        </div>
      )
    }
}

export default MainNavigation
