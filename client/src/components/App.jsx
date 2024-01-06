import React from "react";
import axios from "axios";

import { getItems } from "../services/items";
import List from "./List.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    getItems(axios)
      .then((items) => {
        this.setState({
          items,
        });
      })
      .catch((err) => {
        console.error("Failed to get items!", err);
      });
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        <h1>Item List</h1>
        <List items={items} />
      </div>
    );
  }
}

export default App;
