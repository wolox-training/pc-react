import React, { Component, Fragment } from 'react';
import Modal from 'react-modal';

import addBookSvg from '../../../../assets/add_book.svg';
import actionCreators from '../../../../redux/books/actions'

import SuggestionForm from './components/SuggestionForm';
import strings from './strings.js';
import './styles.css';

class AddSuggestionMenu extends Component {
  openModal = () => {
    this.props.dispatch(actionCreators.openSuggestionModal());
  }
  closeModal = () => {
    this.props.dispatch(actionCreators.closeSuggestionModal());
  }
  onSubmitHandler = (values) => {
    this.props.dispatch(actionCreators.postSuggestion(values.title, values.author, values.link));
  }
  componentWillMount() {
    Modal.setAppElement('body');
  }
  render() {
    return (
      <Fragment>
        <img onClick={this.openModal} src={addBookSvg} className="navbar-icon-image" alt={strings.addBook} />
        <Modal
          isOpen={this.props.suggestionModalIsOpen}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick={true}
          contentLabel={strings.suggestBooks}
          className="navbar-add-suggestion-modal"
          overlayClassName="navbar-add-suggestion-modal-overlay"
        >
          <img src={addBookSvg} className="navbar-add-suggestion-modal-icon" alt={strings.addBook} />
          <h2 className="navbar-add-suggestion-modal-title">{strings.suggestBooks}</h2>
          <SuggestionForm onCancelClick={this.closeModal} onSubmit={this.onSubmitHandler}/>
        </Modal>
      </Fragment>
    );
  }
}

export default AddSuggestionMenu;
