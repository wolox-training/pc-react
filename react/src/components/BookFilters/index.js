import React, { Component } from 'react';
import { connect } from 'react-redux';

import search_image from '../../assets/search.svg';
import filterFieldConstants from '../../constants/filterFieldConstants'

import './styles.css';
import strings from './strings'
import { setBookFilterType, setBookFilterText } from '../../redux/books/actions';


class BookFilters extends Component {
  handleFilterTextChange = (e) => this.props.dispatch(setBookFilterText(e.target.value));
  handleFilterFieldChange = (e) => this.props.dispatch(setBookFilterType(e.target.value));

  render() {
    return (
      <form className="book-filters">
        <select
          value={this.props.filters.type}
          onChange={this.handleFilterFieldChange}
        >
          <option value={filterFieldConstants.DEFAULT_FILTER_FIELD} disabled hidden>{strings.selectFilter}</option>
          <option value="title">{strings.title}</option>
          <option value="author">{strings.author}</option>
        </select>
        <input type="text"
          value={this.props.filters.text}
          onChange={this.handleFilterTextChange}
          placeholder={`${strings.filter}...`}
        />
        <div className="search-image-container">
          <img src={search_image} alt={strings.filter} className="search-image" />
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    filters: {
      text: state.books.filters.text,
      type: state.books.filters.type
    }
  }
}

export default connect(mapStateToProps)(BookFilters);
