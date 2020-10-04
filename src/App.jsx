import React from 'react';

import styles from './App.module.css'
import questionsBase from './Questions'
import Question from './Question/Question'

function App() {
  const [ questions ] = React.useState(questionsBase())
  const [ currentQuestion, setCurrentQuestion] = React.useState(0)
  const [ score, setScore ] = React.useState(0)
  const [ finished, setFinished ] = React.useState(false)

  function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setFinished(true)
    }
  }

  let FinishScreen
  if (finished) {
    FinishScreen = <p>Result: {score}/{questions.length}</p>
  }

  let Questions
  if (!finished) {
    Questions = <>
      <h3>Question #{currentQuestion + 1}</h3>
      {questions.map((q, index) => (
        <Question data={q} visible={index === currentQuestion} addScore={() => setScore(score + 1)}/>
      ))}
      <button onClick={nextQuestion}>
        {currentQuestion == (questions.length - 1)  ? 'Finish' : 'Next'}
      </button>
    </>
  }

  return (
    <div className={styles.App}>
      <h1>English test</h1>
      { Questions }
      { FinishScreen }
    </div>
  );
}

export default App;
