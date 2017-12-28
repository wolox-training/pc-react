import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import BookImage from '../../../BookImage'
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
      <NavLink to={`/detail/${this.props.id}`} className="bookItem">
        <BookImage image_url={image_url} title={this.props.title} />
        <h3 className="bookTitle">{this.props.title}</h3>
        <h4 className="bookAuthor">{this.props.author}</h4>
      </NavLink>
    )
  }
}

export default BookItem;
