import React, { Component } from 'react';
import BookItem from './components/BookItem';
import {data} from '../../mock.js';

class BookList extends Component {
  render() {
    const filterText = this.props.filterText;
    const filterField = this.props.filterField;
    let books = data.map(function(book, thisArg){
      if(
        !filterText ||
        !filterField ||
        (filterField === "1" && book.title.toLowerCase().includes(filterText.toLowerCase())) ||
        (filterField === "2" && book.author.toLowerCase().includes(filterText.toLowerCase()))
      ){
        return (<BookItem key={book.id}
          id={book.id}
          author={book.author}
          title={book.title}
          genre={book.genre}
          publisher={book.publisher}
          year={book.year}
          image_url={book.image_url}
        />)
      }
      return null;
    })
    return (
      <div className="bookList">
        {books}
      </div>
    );
  }
}

export default BookList;
