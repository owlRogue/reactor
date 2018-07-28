import React, { Component } from "react";
import ClickyCard from "./components/ClickyCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Counter from './components/Counter';
import clicky from "./clicky.json";
import "./App.css";

class App extends Component {
  state = {
    clicky
  };

  render() {
    return (
      <Wrapper>
        <Title>Weed Clicky!</Title>
        <Counter />
        {this.state.clicky.map(click => (
          <ClickyCard
            removeClicky={this.removeClicky}
            id={click.id}
            key={click.id}
            image={click.image}
          />
        ))}
      </Wrapper>
    )
  }
}

export default App;