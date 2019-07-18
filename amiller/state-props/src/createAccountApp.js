import React from 'react';
import ScoreInput from './ScoreInput';
import ScoreTable from './ScoreTable'

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    const initialState = {
      scores: [],
      mostRecentTarget: 0
    }

    this.state = initialState;

    this.saveScore = this.saveScore.bind(this);
  }

  saveScore = ({score, count}) => {
    if (count > this.state.mostRecentTarget) {
      console.log('old state');
      console.table(this.state);
      const newState = {
        mostRecentTarget: count,        
        scores: [...this.state.scores, score],
      }
      console.log(`new state`)
      console.table(newState);
      this.setState(newState);
    }
  }

  render() {
    return (
      <div className="App">
        <ScoreInput handleScoreSubmit={this.saveScore}
          count={this.state.mostRecentTarget}/>
        <ScoreTable scoreList={this.state.scores} />
      </div>
    );
  }
}

export default App;
