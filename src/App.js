import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const currentQuestionIndex = 0; 

  const handleAnswerButtonClick = (isCorrect) => {
    if(isCorrect){
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }
  return (
    <>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-sm-5'>
            <div className="card mt-4">
              <div className="card-body">
                <h6 className="card-title">Question {currentQuestionIndex + 1} out of {questions.length}</h6>
                <p className="card-text">{questions[currentQuestion].questionText}</p>
                {showScore ? (
                    <h6 className='text-success'>
                      Congratulations!
                    </h6>
                  ) : (
                    <>
                      <h6 className='text-warning'>
                        Sorry! 
                      </h6>
                    </>
                  )}
                  {score <= questions.length && (
                    <h5 className="card-title">
                      You scored {score} out of {questions.length}
                    </h5>
                  )}



                {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                    <div key={index}>
                      <button 
                        type="button" 
                        onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
                        className="btn btn-outline-info mt-2">
                          {answerOption.answerText}
                      </button>
                      <br />
                    </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
