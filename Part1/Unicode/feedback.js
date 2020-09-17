import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
    <button onClick = {handleClick}>{text}</button>
)

const Statistic = (props) => {
    return (
    <div>{props.text}: {props.value}</div>
    )
}

const Statistics = (props) => {
  if(props.total === 0) {
    return (
    <h1>No feedbacks given</h1>
    )
  }
  return (
    <div>
      <h1>Statistics</h1>
      <Statistic value = {props.feedback.good} text = 'Good' /><br></br>
      <Statistic value = {props.feedback.neutral} text = 'Neutral' /><br></br>
      <Statistic value = {props.feedback.bad} text = 'Bad' /><br></br>
      <Statistic value = {props.total} text = 'Total' /><br></br>
      <Statistic value = {props.average/props.total} text = 'Average' /><br></br>
      <Statistic value = {props.feedback.good/props.total * 100} text = 'Positive' />
    </div>
  )
}

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
      <Statistics feedback = {feedback} total = {total} average = {average} />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
