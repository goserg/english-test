import React from 'react';

import styles from './App.module.css'
import questionsBase from './Questions'
import Question from './Question/Question'

function App() {
  const [ questions ] = React.useState(questionsBase())
  const [ currentQuestion, setCurrentQuestion] = React.useState(0)

  function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  return (
    <div className={styles.App}>
      <h1>English test</h1>
      <h3>Question #{currentQuestion + 1}</h3>
      {questions.map((q, index) => (
        <Question data={q} visible={index === currentQuestion}/>
      ))}
      <button onClick={nextQuestion}>Next</button>
    </div>
  );
}

export default App;
