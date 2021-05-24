import React, { Component} from 'react';

class SearchBar extends Component {
  state = {
    term: ""
  }

  handleChange = (event) => {
    // change the state of term
    this.setState({
      term: event.target.value
    })
    console.log(event.target.value)
    this.props.search(event.target.value);
  }

  componentWillMount() {
    console.log("Search Bar will mount")
  }

  render() {
    return (
      <input
      value={this.state.term}
      type="text"
      className="form-control form-search"
      onChange={this.handleChange}/>
    )
  }

  componentDidMount() {
    console.log("Search Bar did mount")
  }
}

export default SearchBar;

