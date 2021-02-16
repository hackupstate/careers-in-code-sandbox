import React from 'react';
import {Form,FormGroup,Label,Input,Button} from 'reactstrap'

export default class TodoForm extends React.Component{
    render() {
        return(
            <Form>
                <FormGroup>
                    <Label>Title</Label>
                    <Input></Input>
                </FormGroup>

                <FormGroup>
                    <Label>Description</Label>
                    <Input></Input>
                </FormGroup>

                <FormGroup>
                    <Label>DueDate</Label>
                    <Input></Input>

                </FormGroup>
                <Button size="lg" outline color="danger">Commit</Button>
                <Button size="lg" outline color="warning">Fall Back</Button>
            </Form>
        );
    }
}