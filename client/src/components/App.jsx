// import React, { useState, useEffect } from 'react';
import React from 'react';
// import axios from 'axios';
// import { getItems } from '../services/items';
// import List from './List.jsx';
import Row from './Row.jsx';
import requests from '../services/requests';

function App() {
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   getItems(axios)
  //     .then((newItems) => {
  //       setItems({
  //         newItems,
  //       });
  //     })
  //     .catch((err) => {
  //       console.error('Failed to get items!', err);
  //     });
  // }, []);

  return (
    <div className="App">
      <h1>Netflix</h1>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      {/* <List items={items} /> */}
    </div>
  );
}

export default App;
