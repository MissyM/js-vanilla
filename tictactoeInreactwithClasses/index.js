import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const rowStyle = {
  display: 'flex'
}

const squareStyle = {
  'width':'60px',
  'height':'60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'white'
}

const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid'
}

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column'
}

const instructionsStyle = {
  'marginTop': '5px',
  'marginBottom': '5px',
  'fontWeight': 'bold',
  'fontSize': '16px',
}

const buttonStyle = {
  'marginTop': '15px',
  'marginBottom': '16px',
  'width': '80px',
  'height': '40px',
  'backgroundColor': '#8acaca',
  'color': 'white',
  'fontSize': '16px',
}

class Square extends React.Component {
  render() {
    return (
      <div
        className="square"
        style={squareStyle}
        onClick={this.props.onClick}
      >
        {this.props.value}
      </div>
    );
  }
}

const initialState = {
  turn: 'X',
  squares: Array(9).fill(null),
  winner: 'None',
}

class Board extends React.Component {
  state = { ...initialState }

  selectSquare(i) {
    if (this.state.squares[i] !== null || this.state.winner !== 'None') {
      return
    }

    this.setState((prevState) => {
      const squares = [...prevState.squares]

      squares[i] = prevState.turn

      return {
        turn: prevState.turn === 'X' ? 'O' : 'X',
        squares,
        winner: calculateWinner(squares),
      }
    })
  }

  reset = () => {
    this.setState({ ...initialState })
  }

  render() {
    return (
      <div style={containerStyle} className="gameBoard">
        <div id="statusArea" className="status" style={instructionsStyle}>Next player: <span>{this.state.turn}</span></div>
        <div id="winnerArea" className="winner" style={instructionsStyle}>Winner: <span>{this.state.winner}</span></div>
        <button style={buttonStyle} onClick={this.reset}>Reset</button>
        <div style={boardStyle}>
          <div className="board-row" style={rowStyle}>
            <Square value={this.state.squares[0]} onClick={() => this.selectSquare(0)} />
            <Square value={this.state.squares[1]} onClick={() => this.selectSquare(1)} />
            <Square value={this.state.squares[2]} onClick={() => this.selectSquare(2)} />
          </div>
          <div className="board-row" style={rowStyle}>
            <Square value={this.state.squares[3]} onClick={() => this.selectSquare(3)} />
            <Square value={this.state.squares[4]} onClick={() => this.selectSquare(4)} />
            <Square value={this.state.squares[5]} onClick={() => this.selectSquare(5)} />
          </div>
          <div className="board-row" style={rowStyle}>
            <Square value={this.state.squares[6]} onClick={() => this.selectSquare(6)} />
            <Square value={this.state.squares[7]} onClick={() => this.selectSquare(7)} />
            <Square value={this.state.squares[8]} onClick={() => this.selectSquare(8)} />
          </div>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (const line of lines) {
    if (line.every(pos => squares[pos] === 'X')) {
      return 'X'
    }

    if (line.every(pos => squares[pos] === 'O')) {
      return 'O'
    }
  }

  return 'None'
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);