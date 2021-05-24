import React, { Component} from 'react';

class Gif extends Component {
  handleClick = () => {
    const { id, selectedGif } = this.props
    if (selectedGif) {
      this.props.selectedGif(id);
    }
  }

  render() {

    const { id } = this.props
    const src = `https://media3.giphy.com/media/${id}/200.gif`
    // guard clause
    if(!id) {
      return null;
    }

    return (
      <img
      src={src}
      alt=""
      className="gif"
      onClick={this.handleClick}/>
    )
  }
}

export default Gif;


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
