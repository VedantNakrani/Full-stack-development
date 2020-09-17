import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  
  const [clicks, setClicks] = useState({ left: 0, right: 0 })
  
  const handleLeftClick = () => {
    setClicks({ ...clicks, left: clicks.left + 1 })
  }

  const handleRightClick = () => {
    setClicks({ ...clicks, right: clicks.right + 1 })
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
