import React from 'react';
import './App.css';

class ScoreInput extends React.Component {
    constructor(props) {
        super(props);
        
        const initialState = {
            count:  0,
            score: '',
        }

        this.state = initialState;
    }
    
    render() {
        return (
            <div>
                <form>
                    <span>Score: </span>
                    <input type="text" onChange={
                        (e) => {
                            this.setState({
                                ...this.state,
                                score: e.target.value
                            });
                        }
                    }/>
                    <button onClick={
                        (e) => {
                            e.preventDefault();
                            const newCount = this.state.count + 1;
                            this.setState({
                                ...this.state,
                                count: newCount
                            });

                            this.props.handleScoreSubmit({score: this.state.score, count: newCount })
                        }
                    }>Save Score</button>
                </form>
            </div>
        );
    }
}

export default ScoreInput;
