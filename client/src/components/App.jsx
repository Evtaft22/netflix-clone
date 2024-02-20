// import React, { useState, useEffect } from 'react';
import React from 'react';
// import axios from 'axios';
import '../styles/App.css';
// import { getItems } from '../services/items';
// import List from './List.jsx';
import Row from './Row.jsx';
import Banner from './Banner.jsx';
import Nav from './Nav.jsx';
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
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="ACTION" fetchUrl={requests.fetchActionMovies} />
      <Row title="COMEDY" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORROR" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANCE" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
      {/* <List items={items} /> */}
    </div>
  );
}

export default App;
