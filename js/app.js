import React from 'react';
import ReactDOM from 'react-dom';
import { generateProblemSet } from './math-worksheet';

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

class Settings extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      totalProblems: 18
    };
  }  

  render() {
    return(
      <div className="container">
      <div class="row">
        <div class="col-12">
          <div className="settings-container">
            <div className="settings-body">
              <form>
                <div className="form-row">
                  <div className="form-group col-12 col-sm-6 col-lg-3">
                    <label for="totalProblems">How many problems?</label>
                    <input type="text" className="form-control" id="totalProblems" value={this.state.totalProblems || ''} onChange={() => {
                      let tp = Math.min((parseInt(event.target.value, 10) || 0), 384);
                      this.setState({
                        totalProblems: tp
                      })
                    }} />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <ProblemSet problemSet={generateProblemSet({
            totalProblems: this.state.totalProblems
          })} />
        </div>
      </div>
    </div>
    );
  }

}

const render = () => {
  ReactDOM.render(<Settings />, document.getElementById('settings'));
};

render();


