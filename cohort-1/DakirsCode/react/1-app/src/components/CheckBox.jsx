import React from 'react';
import {FormGroup,Label,Input} from 'reactstrap';


export default class CheckBox extends React.Component{
    render() {
        return(
            <div>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                        Check me out
                    </Label>
                </FormGroup>
            </div>
        );
    }
}