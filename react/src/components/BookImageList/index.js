import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import BookImage from '../BookImage';
import {data} from '../../mock.js';
import routes from '../../constants/routes'

import './styles.css';


class BookImageList extends Component {
  render() {
    let books = data.slice(0, this.props.max).map((book) => {

      return (
        <NavLink key={book.id} to={`${routes.DETAIL_NO_ID}${book.id}`} className="image-item">
          <BookImage image_url={book.image_url} title={book.title}  width={90} height={125}/>
        </NavLink>
      );
    });
    return (
      <div className="book-image-list">
        {books}
      </div>
    );
  }
}

export default BookImageList;
