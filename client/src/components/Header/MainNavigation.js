import React, { Component } from 'react';
import { Switch, Link } from 'react-router-dom'
import API from '../../utils/api'


class MainNavigation extends Component {

    logout = () => {
      API.logOutUser().then((res) => {
        if (res.data._id) {
          this.props.changeApp({
            isLoggedIn: false,
          })
        }
      })
    }

    render(props) {
      const user = this.props.user
      let isNavShown = 'hidden'
      if (this.props.navVisibility) {
        isNavShown = 'active'
      }
      return (
        <div>
          {!user._id ?
            <div></div>
            :
            <div>
              <div id='menu-icon' className={isNavShown} onClick={this.props.handleMouseDown}>
                <div className='user-name'>{user.username}</div>
                <div className='user-image'><img src={user.thumbnail} alt='Photo of Current User' /></div>
              </div>
              <nav id='menu' className={isNavShown} onClick={this.props.handleMouseDown}>
                <Switch>
                  <ul className='navigation'>
                    <li><Link to='/'>Profile</Link></li>
                    <li><a href='/logout' className='log-out' onClick={this.logout()}>Log Out</a></li>
                  </ul>
                </Switch>
              </nav>
            </div>
          }
        </div>
      )
    }
}

export default MainNavigation
