import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
// import { Link } from 'react-router-dom'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Phone from '../../assets/images/home-phone.gif'
import Button from '../../components/Buttons/Button'
import './LandingPage.css';
import API from '../../utils/api'

function checkForCookieUser() {
  API.checkUser().then((res) => {
    if (res.data._id) window.location.pathname = `/profile/${res.data._id}`;
  });
}

class LandingPage extends Component {
  render(props) {
    return (
      <div id='index'>
      {this.props.isLoggedIn ? null : checkForCookieUser()}
        <Grid fluid>
          <Row>
            <Col xs={12} md={6} className='intro'>
              <h1>boards</h1>
              <p>
                Boards is an app where you can create moodboards for inspiration.
                Upload your photos to your board use it for your next project.
              </p>
              <a href='http://localhost:3001/auth/google'><Button>Sign Up</Button></a>
            </Col>
            <Col xs={12} md={6} className='intro-phone'>
              <img src={Phone} className='image-gif' alt='A gif of creating a board' />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default LandingPage
