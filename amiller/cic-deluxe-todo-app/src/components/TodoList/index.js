import React from 'react';
import {Row, Col} from 'reactstrap';
import Todo from '../Todo';
import TodoForm from '../TodoForm';
import Filter from '../Filter';

// TodoList is our main component for displaying Todos
// Since it has state, it needs to be a class instead of a functional component

// extends React.Component is an example of composition
// what this means is TodoList haas all the properties and functions that React.Component has, so we don't need to 
// Write them out ourselves in our class
class TodoList extends React.Component {
  constructor (props) { // the constructor only runs once on first render, so we can use it to set our initial state
    super(props);
    this.state = { // setting the initial state
      todos: [ // our array of todos
      ],
      editedTodo: null, // keep track of what the current todo is
      filter: 'DEFAULT' // we use the filter to tell the list if it's okay to show all todos or just non-completed ones
    }

    // so .bind(this) basically makes it so when we call the function we're binding we'll still have reference to 'this'
    // 'this' is just a reference to the class, so we can access functions and properites of the class
    this.saveTodo = this.saveTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.stopEditTodo = this.stopEditTodo.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
  }

  onCompleted(changedTodo) {
    // this.setState is a function to modify our component's state
    // it replaces the entire state with our returned object
    // make sure you include everything you need from the old state!
    this.setState((state) => {
      const todos = state.todos.map((todo) => {
        if (todo.id === changedTodo.id) {
          return {
            ...todo, // object spread operator (...) deconstructs the object to its properties and adds those properties to the surrounding object
            completed: !todo.completed
          }
        }
        return todo;
      });
      return {
        ...state, // by spreading state, we can be sure we include the state we don't care about updating here
        todos // we only need to care about the state we want to update!
      }
    });
  }

  saveTodo() {
    this.setState((state) => {
      if (this.state.editedTodo.id == null) {
        return {
          ...state,
          todos: [
            ...state.todos, // array spread operator works similary, add all the array items from the array to the surrounding array
            {
              id: this.state.editedTodo.title.split(' ').join('-'),
              title: this.state.editedTodo.title,
              description: this.state.editedTodo.description,
              dueDate: this.state.editedTodo.dueDate,
              createDate: Date.now(),
              completed: false,
            }
          ],
          editedTodo: null,
        }
      }
      const todos = state.todos.map((todo) => {
        if (this.state.editedTodo.id === todo.id) {
          return {
            ...todo,
            title: this.state.editedTodo.title,
            description: this.state.editedTodo.description,
            dueDate: this.state.editedTodo.dueDate,
          }
        }
        return todo; 
      });
      return {
        ...state,
        todos: todos,
        editedTodo: null,
      }
    });
  }

  deleteTodo(deletedTodo) {
    this.setState((state) => {
      const todos = state.todos.filter((todo) => {
        if (todo !== deletedTodo) {
          return true;
        }
        return false;
      });
      return {
        ...state,
        todos: todos
      }
    });
  }

  startEditTodo(editTodo) {
    this.setState((state) => {
      return {
        ...state,
        editedTodo: editTodo
      }
    });
  }

  editTodo(fieldName, fieldValue) {
    const updatedEditedTodo = {...this.state.editedTodo}
    updatedEditedTodo[fieldName] = fieldValue;
    this.setState((state) => {
      return {
        ...state,
        editedTodo: updatedEditedTodo,
      }
    })
  }

  stopEditTodo() {
    this.setState((state) => {
      return {
        ...state,
        editedTodo: null
      }
    })
  }

  updateFilter(filterValue) {
    this.setState((state) => {
      return {
        ...state,
        filter: filterValue ? 'ALL' : 'DEFAULT'
      }
    });
  }

  render() { // all component classes must have a render() function!

    // we're checking the filter state to know which Todos to render
    const todosToShow = this.state.todos.filter((todo) => { 
      if (this.state.filter === 'DEFAULT' && todo.completed) {
        return false;
      } else {
        return true;
      }
    });

    // We can return individual JSX tags per todo, to cut down on the lines of codes we need to write
    const todos = todosToShow.map((todo) => {
      return <Todo
        key={todo.id} // in cases like this where we're making a list, we need to include a key prop
        todo={todo}
        title={todo.title}
        description={todo.description}
        dueDate={todo.dueDate}
        createDate={todo.createDate}
        completed={todo.completed}
        handleCompletion={this.onCompleted.bind(this, todo)}
        handleEdit={this.startEditTodo.bind(this, todo)}
        handleDelete={this.deleteTodo.bind(this, todo)}
      />
    });

    return (
      <div>
        <Row>
          <Col>
            <TodoForm 
              saveTodo={this.saveTodo}
              todo={this.state.editedTodo}
              handleEdit={this.editTodo}
              stopEdit={this.stopEditTodo}
            />
          </Col>
          <Col sm="6" xs="12">
            <Row>
              <Col xs="12">
              <Filter
                handleFilterState={this.updateFilter} />
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                {
                  // the curly braces in JSX just mean we're going to evaluate some javascript
                  // because these comments are javascript comments, jsx will try to evaluate them unless we surround them with braces!
                  // in the next line, {todos} means 'insert the value of the variable todos, which is jsx returned from the map function
                  // JSX will just render that for us!
                }
                {todos}  
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default TodoList;
