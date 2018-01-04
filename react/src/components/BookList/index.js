import React, { Component } from 'react';

import BookItem from './components/BookItem';
import {data} from '../../mock.js';
import {getBooks} from '../../services/books';

import './styles.css';

class BookList extends Component {
  state = {data: null};
  componentWillMount(){
    getBooks().then(
      response => response.ok && this.setState({data: response.data})
    );
  }
  render() {
    const filterText = this.props.filterText;
    const filterField = this.props.filterField;
    if(this.state.data){
      return (
        <div className="book-list">
          {
            this.state.data.map((book) => {
              if(
                !filterText ||
                !filterField ||
                book[filterField].toLowerCase().includes(filterText.toLowerCase())
              ){
                return <BookItem key={book.id} {...book} />;
              }
              return null;
            })
          }
        </div>
      );
    }
    return null;
  }
}

export default BookList;
