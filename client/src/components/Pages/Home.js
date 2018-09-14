import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Phone from '../../assets/images/home-phone.gif'
import Button from '../Buttons/Button'
import './Home.css';


class Home extends Component {
  render() {
    return (
      <div id='index'>
        <Grid fluid>
          <Row>
            <Col xs={12} md={6} className='intro'>
              <h1>boards</h1>
              <p>
                Boards is an app where you can create moodboards for inspiration.
                Upload your photos to your board use it for your next project.
              </p>
              <Link to='/'><Button>Sign Up</Button></Link>
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

export default Home
