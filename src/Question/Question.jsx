import React from 'react'

import styles from './Question.module.css'

function Question({data, visible}) {
  const [ answered, setAnswered ] = React.useState(false)



  return (
    <div className={styles.Question} style={{display: !visible && 'none'}}>
      <p>{data.question}</p>
      <div style={{display: 'flex', gap: '0.5rem'}}>
        {data.answers.map(a=>(
          <button
            key={a.answer}
            disabled={answered}
            onClick={() => 
              {
                setAnswered(a)
              }
            }
            className={(answered && a.correct) ? styles.Question_correct : null}
          >
            {a.answer}
          </button>
        ))}
      </div>
    </div>
  )
}



export default Question