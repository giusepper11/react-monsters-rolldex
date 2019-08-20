import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: []
    };
  }

  // Quando o componente montado no DOM, ele executa esse metodo em seguida
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
