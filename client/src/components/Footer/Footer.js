import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Footer extends Component {
  render() {
    return (
      <div>
        <footer className='footer'>
          <span>Made by <a href='https://www.nicholasgreendesigns.com/' rel='noopener' target='_blank' rel='noopener noreferrer'>Nicholas Green</a></span>
        </footer>
      </div>
    )
  }
}

export default Footer
