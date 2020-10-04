import React from 'react'

import styles from './Question.module.css'

function Question({data, visible, addScore}) {
  const [ answered, setAnswered ] = React.useState(false)

  function handleClick(answer) {
    setAnswered(answer)
    if (answer.correct) {
      addScore()
    }
  }

  return (
    <div className={styles.Question} style={{display: !visible && 'none'}}>
      <p>{data.question}</p>
      <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
        {data.answers.map(a=>(
          <button
            key={a.answer}
            disabled={answered}
            onClick={() => 
              {
                handleClick(a)
              }
            }
            className={[
              styles.Question_Button,
              answered.answer === a.answer ? styles.Question_Button_picked : null,
              answered && a.correct ? styles.Question_Button_correct : null
            ].join(' ')}
          >
            {a.answer}
          </button>
        ))}
      </div>
    </div>
  )
}



export default Question