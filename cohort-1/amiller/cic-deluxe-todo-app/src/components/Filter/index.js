import React from 'react';
import {
  Form,
  FormGroup,
  Input,
  Label } from 'reactstrap';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  // We need the Filter state in the the TodoList component so we can know which ToDos to show
  // By passing in a function as a prop, we can lift the state from this component back to its parent
  onChange(e) {
    // lift that state!
    this.props.handleFilterState(e.target.checked);
  }

  render () {
    return (
      <div>
        <Form inline>
          <FormGroup>
            <Label for="showCompleted">
              <Input type="checkbox" id="showCompleted" onChange={this.onChange} />{' '}
              Show Completed Tasks
            </Label>
          </FormGroup>
        </Form>
      </div>
    )
  } 
}

export default Filter;