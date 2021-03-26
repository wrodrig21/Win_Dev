import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// Home component

class Home extends Component {
  render(){
    return(
      
        <h1>tic-tac-toe</h1>
        
    );
  }
}

// About component

class About extends Component {
  render(){
    return(
      <div>
        <h1>About Us</h1>
        <p>We here at the Triple-R love fresh URLs, especially ones tied to awesome React Components.</p>
        <p>It's even better when you can switch between those URLs with ease and share them with friends and family</p>
      </div>
    );
  }
}

// Menu component

class Menu extends Component {
  render(){
    return(
      <div>
        <h1>Menu</h1>
        <p>Check out our amazing 24/7 menu:
          <ul>
            <li>Lazy Loading</li>
            <li>Dynamic Route Matching</li>
            <li>Location Transition Handling</li>
          </ul>
        </p>
      </div>
    );
  }
}

class Navbar extends Component {
  render(){
    return(
      <div className="nav">
        <Link to="/">Home</Link> | 
        <Link to="board">Board</Link> | 
        <Link to="game">Game</Link>
      </div>
    );
  }
}
class Routes extends Component {
  render(){
    return(
      <Router>
        <div>
          <Navbar />
          <hr />
          <Route name="Home" exact path="/" component={Home}/>
          <Route name="Menu" path="/menu" component={Board}/>
          <Route name="About" path="/game" component={Game} />
        </div>
      </Router>
    );
  }
}



function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
  

    
  // creates tic tac toe board
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }
    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : '0';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
      }
      renderSquare(i) {
        return (
          <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
          />
        );
      }
  
    render() {const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
          status = 'Winner: ' + winner;
        } else {
          status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  
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
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  ReactDOM.render(<Routes />, document.getElementById('root'));