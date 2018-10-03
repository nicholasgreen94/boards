import React, { Component } from 'react'
import styled from 'styled-components'
import API from '../../utils/api'
import './AddBoard.css';
import Plus from '../../assets/images/plus.svg'


class AddBoard extends Component {
  constructor(props) {
    super()
    this.createNewBoard = this.createNewBoard.bind(this)
  }

  createNewBoard() {
    console.log('hello it is working')
  }

  render() {
    return (
      <div>
        <CreateBoard onClick={this.createNewBoard} className='create-new-board'>
          <img src={Plus} alt='A plus sign' className='plus-symbol' />
        </CreateBoard>
        <h3 className='board-name'>Board Name</h3>
      </div>
    )
  }
}

export default AddBoard

const CreateBoard = styled.div`
  background: var(--tan);
  border-radius: 8px;
  height: 192px;
  position: relative;
`
