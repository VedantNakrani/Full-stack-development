import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Display = ({counter}) => {
  return (
    <div>
      <h1>{counter}</h1>
    </div>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <div>
      <button onClick = {handleClick}>
        {text}
      </button>
    </div>
  )
}

const App = () => {
  
  const [counter, setCounter] = useState(0)
  const increaseByOne = () => setCounter(counter+1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter = {counter} />
      <Button handleClick = {increaseByOne} text = 'Plus' />
      <Button handleClick = {setToZero} text = 'Zero' />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
