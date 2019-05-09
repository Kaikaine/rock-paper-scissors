import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    player1: {
      name: "You",
      hp: 30,
      choice: "",
      roll: 0
    },
    player2: {
      name: "CPU",
      hp: 30,
      choice: "",
      roll: 0
    },

    scissor: "scissor",
    rock: "rock",
    paper: "paper",

    winner: ""
  };

  componentDidMount() {
    console.log(this.state.player1.choice);
  }

  // ROCK PAPER SCISSORS FUNCTION
  rps = choice => {
    // announces your victory
    if (this.state.player2.hp < 1) {
      this.setState({ winner: "You win" });
      console.log(this.state.winner);
      return;
    } // announces your defeat
    else if (this.state.player1.hp < 1) {
      this.setState({ winner: "CPU wins" });
      console.log(this.state.winner);
      return;
    }

    // amount of damage dealt
    let roll = Math.floor(Math.random() * 10);

    this.setState({
      player1: {
        name: this.state.player1.name,
        hp: this.state.player1.hp,
        choice: choice,
        roll
      }
    });
    console.log(this.state.player1.choice);

    // sets dmg again, not sure why I'm doing this but we're here
    roll = Math.floor(Math.random() * 10);

    let npc = Math.ceil(Math.random() * 3);
    // picks rock paper of scissor for cpu
    if (npc === 1) {
      this.setState({
        player2: {
          name: this.state.player2.name,
          hp: this.state.player2.hp,
          choice: "rock",
          roll
        }
      });
    } else if (npc === 2) {
      this.setState({
        player2: {
          name: this.state.player2.name,
          hp: this.state.player2.hp,
          choice: "paper",
          roll
        }
      });
    } else if (npc === 3) {
      this.setState({
        player2: {
          name: this.state.player2.name,
          hp: this.state.player2.hp,
          choice: "scissor",
          roll
        }
      });
    }

    console.log(this.state.player2.choice);

    // if/else for player1
    if (
      this.state.player1.choice === this.state.rock &&
      this.state.player2.choice === this.state.scissor
    ) {
      this.setState({
        player2: {
          name: this.state.player2.name,
          hp: this.state.player2.hp - this.state.player1.roll,
          choice: this.state.player1.choice,
          roll: 0
        }
      });
    } else if (
      this.state.player1.choice === this.state.paper &&
      this.state.player2.choice === this.state.rock
    ) {
      this.setState({
        player2: {
          name: this.state.player2.name,
          hp: this.state.player2.hp - this.state.player1.roll,
          choice: this.state.player1.choice,
          roll: 0
        }
      });
    } else if (
      this.state.player1.choice === this.state.scissor &&
      this.state.player2.choice === this.state.paper
    ) {
      this.setState({
        player2: {
          name: this.state.player2.name,
          hp: this.state.player2.hp - this.state.player1.roll,
          choice: this.state.player1.choice,
          roll: 0
        }
      });
    }

    // if/else for player2
    if (
      this.state.player2.choice === this.state.rock &&
      this.state.player1.choice === this.state.scissor
    ) {
      this.setState({
        player1: {
          name: this.state.player1.name,
          hp: this.state.player1.hp - this.state.player2.roll,
          choice: "",
          roll: 0
        }
      });
    } else if (
      this.state.player2.choice === this.state.paper &&
      this.state.player1.choice === this.state.rock
    ) {
      this.setState({
        player1: {
          name: this.state.player1.name,
          hp: this.state.player1.hp - this.state.player2.roll,
          choice: "",
          roll: 0
        }
      });
    } else if (
      this.state.player2.choice === this.state.scissor &&
      this.state.player1.choice === this.state.paper
    ) {
      this.setState({
        player1: {
          name: this.state.player1.name,
          hp: this.state.player1.hp - this.state.player2.roll,
          choice: "",
          roll: 0
        }
      });
    }

    // end of function
  };

  // RESETS GAME
  reset = () => {
    this.setState({
      player1: {
        name: "You",
        hp: 30,
        choice: "",
        roll: 0
      },
      player2: {
        name: "CPU",
        hp: 30,
        choice: "",
        roll: 0
      }
    });

    this.setState({ winner: "" });
  };

  render() {
    return (
      <div className="App">
        <h1>ROCK PAPER SCISSORS</h1>

        <div>
          <p>{this.state.player1.name}</p>
          <p>{this.state.player1.hp}</p>
        </div>

        <div>
          <ul>
            <li onClick={() => this.rps(this.state.rock)}>{this.state.rock}</li>
            <li onClick={() => this.rps(this.state.paper)}>
              {this.state.paper}
            </li>
            <li onClick={() => this.rps(this.state.scissor)}>
              {this.state.scissor}
            </li>
          </ul>
        </div>

        <div>
          <p>{this.state.player2.name}</p>
          <p>{this.state.player2.hp}</p>
        </div>

        <div>
          You chose {this.state.player1.choice} and the computer chose{" "}
          {this.state.player2.choice}
        </div>

        <h2>{this.state.winner}</h2>

        {this.state.winner !== "" ? (
          <button onClick={this.reset}>New Game</button>
        ) : null}
      </div>
    );
  }
}

export default App;
