import React, { Component } from 'react';
import './styles.css';
import default_book from '../../assets/default_book.svg';

class BookImage extends Component {
  render() {
    let style_custom = {};
    if(this.props.width){
      style_custom.width = this.props.width;
    }
    if(this.props.height){
      style_custom.height = this.props.height;
    }
    return (
      <div className="image-background" style={style_custom}>
        <img className="book-image" src={this.props.image_url || default_book} alt={this.props.title} />
      </div>
    );
  }
}

export default BookImage;
