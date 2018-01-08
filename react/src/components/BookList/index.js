import React, { Component } from 'react';
import {connect} from 'react-redux';

import BookItem from './components/BookItem';
// import {getBooks} from '../../services/books';

import './styles.css';

class BookList extends Component {
  componentWillMount(){
    // getBooks().then(
    //   response => response.ok && this.setState({data: response.data})
    // );
  }
  render() {
    const filterText = this.props.filterText;
    const filterField = this.props.filterField;
    return (
      <div className="book-list">
        {
          this.props.books.map((book) => {
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
}

const mapStateToProps = state => {
  return {
    books: state.books.books,
    filterField: state.books.filters.type,
    filterText: state.books.filters.text
  };
};

export default connect(mapStateToProps)(BookList);
