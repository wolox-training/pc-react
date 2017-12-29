import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import BookImage from '../../../BookImage';

import './styles.css';

class BookItem extends Component {
  render() {
    return (
      <NavLink to={`/detail/${this.props.id}`} className="book-item">
        <BookImage image_url={this.props.image_url} title={this.props.title} />
        <h3 className="book-title">{this.props.title}</h3>
        <h4 className="book-author">{this.props.author}</h4>
      </NavLink>
    )
  }
}

export default BookItem;
