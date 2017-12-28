import React, { Component } from 'react';
import './styles.css';
import default_book from '../../../../assets/default_book.svg';

class BookItem extends Component {
  render() {
    let image_url
    if(this.props.image_url === null){
      image_url = default_book;
    }else{
      image_url = this.props.image_url;
    }
    return (
      <div className="book-item">
        <div className="image-background">
          <img className="book-image" src={image_url} alt={this.props.title} />
        </div>
        <h3 className="book-title">{this.props.title}</h3>
        <h4 className="book-author">{this.props.author}</h4>
      </div>
    )
  }
}

export default BookItem;
