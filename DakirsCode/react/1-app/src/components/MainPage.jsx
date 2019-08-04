import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'reactstrap'

//components for the main page
import CheckBox from './CheckBox'
import Header from './Header'
import TodoButton from './TodoButton'

export default class MainPage extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            title: "Dakirs Todo"
        }
    }
    render() {
        return(
            <Container>
                <Row>
                    <Col> <Header title={this.state.title}/> </Col>     
                </Row>
                
                <Row>
                   <Col xs="6"> <TodoButton/> </Col>
                   <Col xs="6"> <CheckBox/> </Col>
                </Row>
            </Container>
        );
    }
}