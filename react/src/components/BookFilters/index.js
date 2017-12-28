import React, { Component } from 'react';
import strings from './strings'
import filterFieldConstants from '../../constants/filterFieldConstants'
import './styles.css';
import search_image from '../../assets/search.svg';

class BookFilters extends Component {
  handleFilterTextChange = (e) => this.props.onFilterTextChange(e.target.value);
  handleFilterFieldChange = (e) => this.props.onFilterFieldChange(e.target.value);

  render() {
    return (
      <form className="book-filters">
        <select
          value={this.props.filterField}
          onChange={this.handleFilterFieldChange}
        >
          <option value={filterFieldConstants.defaultFilterField} disabled hidden>{strings.selectFilter}</option>
          <option value="title">{strings.title}</option>
          <option value="author">{strings.author}</option>
        </select>
        <input type="text"
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
          placeholder={strings.filter + "..."}
        />
        <div className="search-image-container">
          <img src={search_image} alt={strings.filter} className="search-image" />
        </div>
      </form>
    );
  }
}

export default BookFilters;