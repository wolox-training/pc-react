import React, { Component } from 'react';
import './styles.css';
import search_image from '../../assets/search.svg';

class BookFilters extends Component {
  handleFilterTextChange = (e) => this.props.onFilterTextChange(e.target.value);
  handleFilterFieldChange = (e) => this.props.onFilterFieldChange(e.target.value);

  render() {
    return (
      <form className="book-filters">
        <select
          defaultValue=""
          value={this.props.filterField}
          onChange={this.handleFilterFieldChange}
        >
          <option value="" disabled hidden>Seleccionar filtro</option>
          <option value="title">Título</option>
          <option value="author">Autor</option>
        </select>
        <input type="text"
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
          placeholder="Buscar..."
        />
        <div className="search-image-container">
          <img src={search_image} alt="Filtrar" className="search-image" />
        </div>
      </form>
    );
  }
}

export default BookFilters;
