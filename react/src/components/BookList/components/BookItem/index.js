import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      <Link to="/detail" className="bookItem">
        <div className="imageBackground">
          <img className="bookImage" src={image_url} alt={this.props.title} />
        </div>
        <h3 className="bookTitle">{this.props.title}</h3>
        <h4 className="bookAuthor">{this.props.author}</h4>
      </Link>
    )
  }
}

export default BookItem;
