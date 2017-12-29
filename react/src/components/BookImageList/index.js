import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import BookImage from '../BookImage';
import './styles.css';
import {data} from '../../mock.js';

class BookImageList extends Component {
  render() {
    const max = this.props.max;
    let i = 0;
    let books = data.map((book) => {
      if(i < max){
        i++;
        return (
          <NavLink key={book.id} to={`/detail/${book.id}`} className="image-item">
            <BookImage image_url={book.image_url} title={book.title}  width={90} height={125}/>
          </NavLink>
        );
      }
      return null;
    });
    return (
      <div className="book-image-list">
        {books}
      </div>
    );
  }
}

export default BookImageList;
