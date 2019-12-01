import React from 'react';
import ReactDOM from 'react-dom';
import { problemSet } from './math-worksheet';

class Problem extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let problem = this.props.problem;
    return (
    <div className={'card a-problem' + (this.state.isCorrect ? ' correct': '') + (this.state.isShaking ? ' shake-slow': '')}>
      <div className="card-body">
        <div className="top-number">{problem.topNumber}</div>
        <div className="bottom-number">{problem.bottomNumber}</div>
        <div className="seperator">
          <i className="fa fa-plus"></i>
          <hr />
        </div>
        {problem.showAnswers === true ? 
          <div className="answer">
            {problem.answer}
          </div>
          : 
          <div>
            <form>
              <input type="text" className="answer-input" onChange={() => {
                this.setState({
                  isCorrect: problem.answer === parseInt(event.target.value, 10),
                  isShaking: problem.answer === parseInt(event.target.value, 10)
                });
                setTimeout(() => {
                  this.setState({
                    isShaking: false
                  });
                }, 1000)
              }} />
            </form>
          </div>
        }
      </div>
    </div>
    );
  }
}



class ProblemSet extends React.Component {
  render() {
    let problemSet = this.props.problemSet;
    let ret = problemSet.map((problem) => {
      return <Problem problem={problem} />
    });
    return ret;
  }
}

const render = () => {
  ReactDOM.render(<ProblemSet problemSet={problemSet} />, document.getElementById('problem-set'));
};

render();


