import React from 'react';
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardText,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row } from 'reactstrap';
import Moment from 'moment';

class ToDo extends React.Component {
  //TODO *hah* - Add some state in here to control things like card color based on due date and current date
  render () {
    return (
      <div>
        <Card>
          <CardHeader>
            <Row>
              <Col><h3>{this.props.title}</h3></Col>
              <Col xs={{ size: 'auto' }}>
                <ButtonGroup>
                  <Button color="secondary" onClick={this.props.handleEdit}>Edit</Button>
                  <Button color="danger" onClick={this.props.handleDelete}>Delete</Button>
                </ButtonGroup>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <CardText>{this.props.description}</CardText>
            <CardText>Due by: {Moment(this.props.dueDate).format('LL')}</CardText>
            <CardText>Created on: {Moment(this.props.createDate).format('LLL')}</CardText>
            <div>
              <Form inline>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      defaultChecked={this.props.completed}
                      onChange={this.props.handleCompletion}
                    />{' '}
                    Completed
                  </Label>
                </FormGroup>
              </Form>
            </div>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default ToDo