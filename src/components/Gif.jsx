import React, { Component} from 'react';

class Gif extends Component {
  handleClick = () => {
    const { id, selectedGif } = this.props
    if (selectedGif) {
      this.props.selectedGif(id);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.id !== this.props.id;
  }

  render() {
    console.log("RENDER GIF")

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

