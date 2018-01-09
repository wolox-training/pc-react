import React, { Component } from 'react';
import {connect} from 'react-redux';

import BookItem from './components/BookItem';

import './styles.css';

class BookList extends Component {
  render() {
    const filterText = this.props.filterText;
    const filterType = this.props.filterType;
    return (
      <div className="book-list">
        {
          this.props.books.map((book) => {
            if(
              !filterText ||
              !filterType ||
              book[filterType].toLowerCase().includes(filterText.toLowerCase())
            ){
              return <BookItem key={book.id} {...book} />;
            }
            return null;
          })
        }
      </div>
    );

  }
}

const mapStateToProps = state => {
  return {
    books: state.books.books,
    filterType: state.books.filterType,
    filterText: state.books.filterText
  };
};

export default connect(mapStateToProps)(BookList);
