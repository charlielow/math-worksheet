let defaultConfig = {
  operation: 'addition',
  totalProblems: 18,
  showAnswers: false,
  minNumber: 0,
  maxNumber: 12
};

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

const generateProblemSet = (config) => {
  let problemSet = [];
  let finalConfig = Object.assign({}, defaultConfig, config);
  for (let i = 0; i < finalConfig.totalProblems; i++) {
    problemSet.push(new Problem(finalConfig));
  };
  return problemSet;
};

generateProblemSet();

export { generateProblemSet };