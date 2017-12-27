import React, { Component } from 'react';
import search_image from '../../assets/search.svg';

class BookFilters extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleFilterFieldChange = this.handleFilterFieldChange.bind(this);
  }
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  handleFilterFieldChange(e) {
    this.props.onFilterFieldChange(e.target.value);
  }

  render() {
    return (
      <form className="bookFilters">
        <select
        defaultValue=""
        value={this.props.filterField}
        onChange={this.handleFilterFieldChange}
        >
          <option value="" disabled hidden>Seleccionar filtro</option>
          <option value={1}>Título</option>
          <option value={2}>Autor</option>
        </select>
        <input type="text"
        value={this.props.filterText}
        onChange={this.handleFilterTextChange}
        placeholder="Buscar..."
        />
        <div className="searchImageContainer">
          <img src={search_image} alt="Filtrar" className="searchImage" />
        </div>
      </form>
    );
  }
}

export default BookFilters;
