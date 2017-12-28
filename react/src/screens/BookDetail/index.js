import React, { Component } from 'react';

class BookDetail extends Component {
  render() {
    return <h1>Detail: {this.props.match.params.id}</h1>
  }
}

export default BookDetail;
