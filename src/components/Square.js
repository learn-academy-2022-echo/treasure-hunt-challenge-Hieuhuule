import React, { Component } from 'react'

const Square = (props) => { // gives the component the props in the component call

  const handleClick= () => { // onClick pass the following values up river
    props.handleGamePlay(props.index) // gives handleGameplay access to index from board.map in component call
    props.handleGamePlay(props.value) // gives handleGameplay access to value from board.map in component call
  }

  return(
      <>
      <div 
      className='square' onClick={handleClick}>{props.value}</div> {/* on component call, create an onClickEvent, display value from App.js */}
      </>
  )
}
export default Square
