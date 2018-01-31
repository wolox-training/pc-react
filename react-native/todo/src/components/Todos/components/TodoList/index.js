import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  View
} from 'react-native';

import Checkbox from './components/Checkbox';
import DeleteButton from './components/DeleteButton';
import styles from './styles';

class TodoList extends Component {
  componentWillReceiveProps(nextProps) {
    if(nextProps.todos){
      nextProps.todos.sort(function(a, b) {
        return a.id - b.id;
      });
    }
  }
  render() {
    return (
      <ScrollView style={styles.todoList}>
        {
          this.props.todos && this.props.todos.map(todo => {
            return (
              <View style={todo.isChecked ? [styles.todo, styles.todoCompleted] : styles.todo} key={todo.id}>
                <Text>
                  {todo.text}
                </Text>
                <View style={styles.actions}>
                  <Checkbox
                    {...this.props}
                    isChecked={todo.isChecked}
                    todo={todo.id}
                  />
                  <DeleteButton
                    {...this.props}
                    todo={todo.id}
                    deleteClickHandler={this.deleteClickHandler}
                  />
                </View>
              </View>
            );
          })
        }
      </ScrollView>
    );
  }
}

export default TodoList;
