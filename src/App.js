import React from "react";
import axios from "axios";
import CardList from "./components/card-list/card-list-component";
import SearchField from "./components/searchField/searchField-component";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => this.setState({ monsters: response.data }));
  }

  onChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchField
          text={this.state.searchField}
          onChange={this.onChange}
          placeholder="search monsters"
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
