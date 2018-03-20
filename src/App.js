import React, { Component } from "react";
import PeopleList from "./components/PeopleList";
import PickedList from "./components/PickedList";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: ["Bob", "Joe", "Harry", "Stacy", "Jenny", "Barry", "Lina"],
      picked: []
    };
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleConfirm(person) {
    //Creates a copy of the people array. Take the chosen person out of the array
    let peopleCopy = this.state.people.slice();
    const index = peopleCopy.indexOf(person);
    peopleCopy.splice(index, 1);

    //Creates a copy of the picked array. Pushes in chosen person into the array
    let pickedCopy = this.state.picked.slice();
    pickedCopy.push(person);

    this.setState({
      people: peopleCopy,
      picked: pickedCopy
    });
  }

  render() {
    const { people, picked } = this.state;
    console.log(picked);
    let peopleList = people.map((element, index) => {
      return (
        <PeopleList
          key={index}
          person={element}
          handleConfirm={this.handleConfirm}
        />
      );
    });

    let pickedList = picked.map((element, index) => {
      return <PickedList key={index} person={element} />;
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">People List</h1>
        </header>
        <h4>General List</h4>
        {peopleList}
        <br />
        <h4>Picked List</h4>
        {pickedList}
      </div>
    );
  }
}

export default App;
