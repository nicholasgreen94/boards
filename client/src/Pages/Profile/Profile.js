import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import API from '../../utils/api'



class Profile extends Component {
  componentDidMount() {
    if (!this.props.isLoggedIn) {
      API.checkUser()
         .then((res) => {
           if (res.data._id) {
             this.props.changeApp({
               isLoggedIn: true,
               user: res.data
             })
           } else window.location.pathname = '/'
        })
    }
  }


  render(props) {
    return(
      <div>
        <h1>Hello {this.props.user.username}</h1>
        <img src={this.props.user.thumbnail} />
      </div>
    )
  }

}

export default Profile
