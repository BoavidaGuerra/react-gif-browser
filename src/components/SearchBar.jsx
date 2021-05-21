import React, { Component} from 'react';

class SearchBar extends Component {
  render() {
    return (
      <input type="text" className="form-control form-search"/>
    )
  }
}

export default SearchBar;

// Components:
  // App
    // state: { gifs: [], selectedGifId: null }
    // App this.setState({ selectedGifId: …})
    // SearchBar
      // props: none
      // event: enter or keyup
      // onKey={this.props.handleKey}
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
