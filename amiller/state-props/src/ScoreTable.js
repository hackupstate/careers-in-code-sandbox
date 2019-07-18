import React from 'react';
import { Col, Table } from 'reactstrap';

class ScoreTable extends React.Component {
    
    makeScoreTable = () => (
        <Table>
            <thead>
                <td>
                    Target Number
                </td>
                <td>
                    Score
                </td>
            </thead>
            <tbody>
            {
                this.props.scoreList.map((score, index) => {
                    return (
                        <tr>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                {parseInt(score)}
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
       </Table>
    )
    render () {
        return  (
            <Col xs={{size:"8", offset:"2"}}>
                {this.makeScoreTable()}
            </Col>
        )
    }
}

export default ScoreTable