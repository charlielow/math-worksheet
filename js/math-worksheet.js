let pageConfig = {
  operation: 'addition',
  totalProblems: 18,
  showAnswers: false,
  minNumber: 0,
  maxNumber: 12
};

let problemSet = [];

class Problem {
  
  constructor(props) {
    Object.assign(this, props);
    this.topNumber = this.getRandomNumber(this.minNumber, this.maxNumber)
    this.bottomNumber = this.getRandomNumber(this.minNumber, this.maxNumber)
    switch (this.operation) {
      case 'addition':
        this.answer = this.topNumber + this.bottomNumber;
        break;
      default:
        
    }
  }

  getRandomNumber (minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  }


}

const generateProblemSet = () => {
  problemSet = [];
  for (let i = 0; i < pageConfig.totalProblems; i++) {
    problemSet.push(new Problem(pageConfig));
  }  
};

generateProblemSet();

export { problemSet };