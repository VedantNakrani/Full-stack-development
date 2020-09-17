import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  
  const [clicks, setClicks] = useState({ left: 0, right: 0})
  
  const handleLeftClick = () => {
    const newClicks = {
      left: clicks.left + 1,
      right: clicks.right
    }
    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = {
      left: clicks.left,
      right: clicks.right + 1
    }
    setClicks(newClicks)
  }
  
  return (
    <div>
      <h1>Hello There.</h1>
      {clicks.left}  
      <button onClick = {handleLeftClick}>Left</button>
      <button onClick = {handleRightClick}>Right</button>
      {clicks.right}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
