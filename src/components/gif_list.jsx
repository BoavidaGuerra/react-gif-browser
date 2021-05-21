import React, { Component} from 'react';
import Gif from './gif';

class GifList extends Component {
  renderList = () => {
    const { gifs } = this.props
    return gifs.map(gif => {
      return <Gif id={gif.id} key={gif.id} selectedGif={this.props.selectedGif} />
    })
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    )
  }
}

export default GifList;
