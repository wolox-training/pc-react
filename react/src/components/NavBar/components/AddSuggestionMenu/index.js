import React, { Component, Fragment } from 'react';
import Modal from 'react-modal';

import addBookSvg from '../../../../assets/add_book.svg';

import SuggestionForm from './components/SuggestionForm';
import strings from './strings.js';
import './styles.css';

class AddSuggestionMenu extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  onSubmitHandler(){
    console.log('hola');
  }
  componentWillMount() {
    Modal.setAppElement('body');
  }
  render() {
    return (
      <Fragment>
        <img onClick={this.openModal} src={addBookSvg} className="navbar-icon-image" alt={strings.addbook} />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick={true}
          contentLabel={strings.suggestbooks}
          className="navbar-add-suggestion-modal"
          overlayClassName="navbar-add-suggestion-modal-overlay"
        >
          <img  src={addBookSvg} className="navbar-add-suggestion-modal-icon" alt={strings.addbook} />
          <h2 className="navbar-add-suggestion-modal-title">{strings.suggestbooks}</h2>
          <SuggestionForm onCancelClick={this.closeModal} submitHandler={this.onSubmitHandler}/>
        </Modal>
      </Fragment>
    );
  }
}

export default AddSuggestionMenu;
