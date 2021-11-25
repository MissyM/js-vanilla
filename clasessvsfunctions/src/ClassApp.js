//Class component are verbose
import React from 'react';


export default class Counter extends React.Component {
  state = {
    counter: 0,
  }

  constructor(props) {
    super(props)
    this.handlerClick = this.handlerClick.bind(this)
  }
  
  handlerClick() {
    this.setState({counter: this.state.counter + 1})
  }

  render() {
    return (
      <> 
        <p>counter:{this.state.counter} </p>
        <button onClick={this.handlerClick}> Increment
        </button>
      </> 
    ) 
  }
}