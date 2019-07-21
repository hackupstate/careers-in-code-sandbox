import React from 'react';
import {Button,Container,Row} from 'reactstrap';

import TodoForm from './TodoForm'

export default class TodoButton extends React.Component{
    constructor(props) {
        super(props);

        const initialState = { showUp:false};

        this.state = initialState;

        this.showTodoForm = this.showTodoForm.bind(this);
    }

    //state modifier or method
    showTodoForm(event){
        //event.preventDefault
        let newState = {
            ...this.state,
            showUp: !this.state.showUp
            }

        this.setState(newState)
    }


    render(){
        return(
            <Container>
                {console.log(this.state)}
                <Row> 
                    {(this.state.showUp) ? <TodoForm /> : <Button color="primary" size="lg" outline color="primary"block
                    onClick={this.showTodoForm}> 
                    Add A ToDo
                </Button>}
                 </Row>
            </Container>
        );
    }
}