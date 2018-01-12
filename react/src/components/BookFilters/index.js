import React, { Component } from 'react';
import { connect } from 'react-redux';

import search_image from '../../assets/search.svg';
import filterFieldConstants from '../../constants/filterFieldConstants'

import './styles.css';
import strings from './strings'
import actionCreators from '../../redux/books/actions';


class BookFilters extends Component {
  handleFilterTextChange = (e) => this.props.dispatch(actionCreators.setBookFilterText(e.target.value));
  handleFilterFieldChange = (e) => this.props.dispatch(actionCreators.setBookFilterType(e.target.value));

  render() {
    return (
      <form className="book-filters">
        <select
          value={this.props.filterType}
          onChange={this.handleFilterFieldChange}
        >
          <option value={filterFieldConstants.DEFAULT_FILTER_FIELD} disabled hidden>{strings.selectFilter}</option>
          <option value="title">{strings.title}</option>
          <option value="author">{strings.author}</option>
        </select>
        <input type="text"
          value={this.props.filterText}
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

const mapStateToProps = store => {
  return {
    filterText: store.books.filterText,
    filterType: store.books.filterType
  }
}

export default connect(mapStateToProps)(BookFilters);
