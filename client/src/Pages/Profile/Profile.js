import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import API from '../../utils/api'
import './Profile.css';
import AddBoard from '../../components/AddBoard/AddBoard'
import Board from '../../components/Board/Board'

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
    const user = this.props.user
    return(
      <div className='user-boards'>
        <div className='profile-heading'>
          <h1>{user.username}</h1>
          <span className='num-boards'>10 boards</span>
        </div>
        <Grid className='boards'>
          <h2>Your boards</h2>
          <Row>
            <Col xs={6} md={4} lg={4}>
              <AddBoard />
            </Col>
            <Col xs={6} md={4} lg={4}>
              <Board />
            </Col>
          </Row>
        </Grid>


      </div>
    )
  }

}

export default Profile
