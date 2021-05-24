import React, { Component } from 'react';
import giphy from 'giphy-api'

import SearchBar from './components/search_bar';
import Gif from './components/gif.jsx';
import GifList from './components/gif_list.jsx';


class App extends Component {
  state = {
    gifs: [],
    selectedGifId: null //'xT9IgDEI1iZyb2wqo8'
  }



  // search = (query) => {
  //   const GIPHY_API_KEY = 'uMLBUqFZMtocuuUL4oHGXaBlrACck2v0'
  //   const giphEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${query}&limit=10`
  //   fetch(giphEndpoint).then(response => response.json()).then((data) => {
  //     const gifs = data.data.map(giph => giph.id)
  //     this.setState({ gifs: gifs });
  //   });
  // }

  search(query) {
    giphy('uMLBUqFZMtocuuUL4oHGXaBlrACck2v0').search({
        q: query,
        limit: 10,
        rating: 'g'
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  // search = (query) => {
  //   giphy('uMLBUqFZMtocuuUL4oHGXaBlrACck2v0').search({
  //       q: query,
  //       limit: 10,
  //       rating: 'g'
  //   }, (error, result) => {
  //     this.setState({
  //       gifs: result.data
  //     });
  //   });
  // }

  selectedGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    //this.search("disney"); // for test purposes
    //const { gifs, selectedGifId} = this.state

    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search.bind(this)}/>
          {/*Gif component*/}
          <div className="selected-gif">
            <Gif
              id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          {/*Gif List component*/}
          <GifList gifs={this.state.gifs} selectedGif={this.selectedGif}/>
        </div>
      </div>
    );
  }
}

export default App;

// Components:
  // App
    // state: { gifs: [], selectedGifId: null }
    // App this.setState({ selectedGifId: …})
    // SearchBar
      // props: none
      // event: enter or keyup
      // onKey={this.props.handleClick}
    // GifList
      // props: { gifs: [ ... ] }
      // > Gif
        // props: { id: 'xT9IgDEI1iZyb2wqo8' } //
        // event: click
        // onClick={this.props.handleClick}
    // Gif
      // props: { id: 'xT9IgDEI1iZyb2wqo8' } //

// Modeling data
// 1. Think immutable first. Model data with props.
  // A Gif is characterised by its id (string)
  // A GifList is characterised by a list of gifs (array)
  // SearchBar has no props.
  // Neither does App.
  // // Gif's props:
  // { id: 'xT9IgDEI1iZyb2wqo8' }
  // // GifList's props:
  // { gifs: [ ... ] }

// 2. Then think in terms of events.
  // Data which needs to change after an event
  // must be carried by some component's state.
