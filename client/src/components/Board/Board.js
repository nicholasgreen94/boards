import React, { Component } from 'react'
import styled from 'styled-components'
import API from '../../utils/api'
import './Board.css'

class Board extends Component {
  render() {
    return (
      <div>
        <div className='board'>

        </div>
        <h3 className='board-name'>Board Name</h3>
      </div>
    )
  }
}

export default Board
