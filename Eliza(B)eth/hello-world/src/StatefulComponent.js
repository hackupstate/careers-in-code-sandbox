import React from 'react';
import { Form, FormGroup, Button, Input, Label } from 'reactstrap';
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import 'react-widgets/dist/css/react-widgets.css';

Moment.locale('en')
momentLocalizer()


class StatefulComponent extends React.Component {
    constructor (props){
        super(props);
        const initialState = {
            inputValue: 'hi',
            date: new Date(),
        }
        this.state = initialState;
    }
    render() {
        return (
            <div>
                <h1>Test</h1>
                <Form>
                    <FormGroup>
                        <Label for='testText'>Text updated by State</Label>
                        <Input id='testText' value={`${this.state.inputValue} time: ${Moment(this.state.date).format('LLL')}`} type='text'/>
                    </FormGroup>
                    <FormGroup>
                        <Label for='testDate'>Choose your date</Label>
                        <DateTimePicker onChange={(value) => {
                            this.setState({
                                textValue: this.state.textValue,
                                date: value})
                            }}
                            defaultCurrentDate={this.state.date} />
                    </FormGroup>
                    <Button onClick={
                        (e) => {
                            if (this.state.inputValue === 'hi') {
                                this.setState({
                                    inputValue: 'changed',
                                    date: this.state.date
                                });
                            } else {
                                this.setState({
                                    inputValue: 'hi',
                                    date: this.state.date
                                });
                            }
                        }
                    } >Text updated by state</Button>
                </Form>
            </div>
        );
    }
}

export default StatefulComponent;