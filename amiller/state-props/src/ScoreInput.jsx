import React from 'react';
import {Col, Form, FormGroup, Input, Label, Button} from 'reactstrap'
import './App.css';

class ScoreInput extends React.Component {
    constructor(props) {
        super(props);
        
        const initialState = {
            score: '',
        }

        //this.setState = initialState; <-- NOT THIS !!!!
        this.state = initialState;
    }
    
    render() {
        return (
            <Col xs={{size: "auto", offset: "3"}}>
                <Form inline>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="scoreTextBox" className="mr-sm-2" >Score: </Label>
                        <Input id="scoreTextBox" type="text" onChange={
                            (e) => {
                                this.setState({
                                    ...this.state,
                                    score: e.target.value
                                });
                            }
                        }/>
                    </FormGroup>
                    <Button onClick={
                        (e) => {
                            e.preventDefault();

                            /*const newCount = this.state.count + 1;
                            this.setState({
                                ...this.state,
                                count: newCount
                            });*/

                            const newCount = this.props.count + 1
                            // this.props.handleScoreSubmit({score: this.state.score, count: this.state.count + 1}) // don't do this, won't update count in state for ScoreInput
                            this.props.handleScoreSubmit({score: this.state.score, count: +newCount })
                        }
                    }>Save Score</Button>
                </Form>
            </Col>
        );
    }
}

export default ScoreInput;
