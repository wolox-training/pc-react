import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

class Todos extends Component {
  render() {
    return (
      <Fragment>
        <AddTodo {...this.props} />
        <TodoList {...this.props} />
      </Fragment>
    );
  }
}

const mapStateToProps = (store) => ({
  todos: store.todos,
});

export default connect(mapStateToProps)(Todos);
