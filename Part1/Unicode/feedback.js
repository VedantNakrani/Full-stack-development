import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
    <button onClick = {handleClick}>{text}</button>
)

const App = () => {
  
  const [feedback, setFeedback] = useState({good: 0, neutral: 0, bad: 0})

  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  
  const updateGood = () => {
    setFeedback({...feedback, good: feedback.good + 1})
    setTotal(total + 1)
    setAverage(average + 1)
  }
  const updateNeutral = () => {
    setFeedback({...feedback, neutral: feedback.neutral + 1})
    setTotal(total + 1)
  }
  const updateBad = () => {
    setFeedback({...feedback, bad: feedback.bad + 1})
    setTotal(total + 1)
    setAverage(average - 1)
  }
  
  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick = {updateGood} text = 'Good' />
      <Button handleClick = {updateNeutral} text = 'Neutral' />
      <Button handleClick = {updateBad} text = 'Bad' />
      <h1>Statistics</h1>
      Good: {feedback.good}<br></br>
      Neutral: {feedback.neutral}<br></br>
      Bad: {feedback.bad}<br></br>
      Total: {total}<br></br>
      Average: {average/total}<br></br>
      Positive: {feedback.good/total * 100}
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
