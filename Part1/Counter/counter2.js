import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const History = (props) => {
  return (
    <div>
      Button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick = {handleClick}>{text}</button>
)

const App = () => {
  
  const [clicks, setClicks] = useState({ left: 0, right: 0 })
  const [allClicks, setAll] = useState([])
  
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setClicks({ ...clicks, left: clicks.left + 1 })
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setClicks({ ...clicks, right: clicks.right + 1 })
  }
  
  return (
    <div>
      <h1>Hello there.</h1>
      {clicks.left}  
      <Button handleClick = {handleLeftClick} text = 'Left' />
      <Button handleClick = {handleRightClick} text = 'Right' />
      {clicks.right}
      <History allClicks = {allClicks} />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
