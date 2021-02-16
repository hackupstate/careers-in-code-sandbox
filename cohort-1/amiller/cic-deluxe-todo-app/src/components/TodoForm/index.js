import React from 'react';
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  ButtonGroup } from 'reactstrap';
import { DateTimePicker } from 'react-widgets';
import 'react-widgets/dist/css/react-widgets.css';

Moment.locale('en')
momentLocalizer();

class TodoForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {formVisible: false};
    this.submitTodo = this.submitTodo.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.toggleFormVisible = this.toggleFormVisible.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  clearForm () {
    this.setState(() => {
      return {
        todoTitle: '',
        todoDescription: ''
      }
    })
  }

  submitTodo (e) {
    this.props.saveTodo(this.props.todo)
    this.clearForm();
  }

  toggleFormVisible () {
    this.setState((state) => {
      return {
        ...this.state,
        formVisible: !this.state.formVisible,
      }
    });
    this.clearForm();
    this.props.stopEdit();
  }

  // we want to shwo the form if:
  // 1. the add todo button was clicked (set formVisible directly) this is handled by toggleFormVisible
  // 2. if we're editing a todo (set formVisible if todo isn't null) which we check for here

  // componentDidUpdate is a specific lifecycle function for react components
  // it gets called everytime after updating the component
  // This is a handy spot to do things like modify state based on new prop values
  // always be sure to wrap any calls to setState in a conditional statement
  // otherwise the state will never stop being changed and the component will never stop updating
  // It's an infinite loop which is BAD 
  componentDidUpdate(prevProps) {
    if (this.props.todo !== prevProps.todo) {
      this.setState((state) => {
        return {
          formVisible: this.props.todo != null,
        }
      });
    }
  }

  onChange(e) {
    // can't check type of Date, it just gives object. So we need to see if this is an event or not
    // This function can get more complicated if we add more fields that don't use an event as a parameter
    // or need special logic to fit parameters to handleEdit, but for now it's fine
    if (e.target == null) {
      this.props.handleEdit('dueDate', e);
    } else {
      this.props.handleEdit(e.target.name, e.target.value);
    }
  }

  render () {
    // here we want to initialize form values so we can use the same component for both new ToDos and edited ToDos
    const {title, description, dueDate } = this.props.todo || { title: '', description: '', dueDate: null}
    const todoForm = (
      <div>
        <Form>
          <FormGroup>
            <Label for="todoTitle">Title</Label>
            <Input id="todoTitle" name="title" value={title} onChange={this.onChange} />
          </FormGroup>
          <FormGroup>
            <Label for="todoDescription">Description</Label>
            <Input type="textarea" name="description" id="todoDescription" value={description} onChange={this.onChange} />
          </FormGroup>
          <FormGroup>
            <Label for="todoDueDate">Due Date</Label>
            <DateTimePicker
              name="dueDate"
              time={false}
              defaultCurrentDate={dueDate}
              onChange={this.onChange}
            />
          </FormGroup>
          <ButtonGroup size="sm">
            <Button color="success" onClick={this.submitTodo}>Save Todo</Button>
            <Button onClick={this.toggleFormVisible}>Cancel</Button>
          </ButtonGroup>
        </Form>
      </div>
    );

    const hidden = (
      <div>
        <Button color="primary" className="btn-block" onClick={this.toggleFormVisible}>Add Todo</Button>
      </div>
    )

    // we can choose which JSX to return based on an if statement
    if (this.state.formVisible) {
      return todoForm;
    }
    return hidden;
  }
}

export default TodoForm;