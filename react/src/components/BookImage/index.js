import React, { Component } from 'react';

class BookImage extends Component {
  render() {
    return (
      <div className="imageBackground">
        <img className="bookImage" src={this.props.image_url} alt={this.props.title} />
      </div>
    )
  }
}

export default BookImage;
