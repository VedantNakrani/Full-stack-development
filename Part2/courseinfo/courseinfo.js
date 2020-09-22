import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({name}) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

const Part = ({name, exercises}) => {
  return (
    <div>
      <p>{name} {exercises}</p>
    </div>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part => 
        <Part key = {part.id} name = {part.name} exercises = {part.exercises} />
      )}
    </div>
  )
}

const Total = ({parts}) => {
  const array = parts.map(part => part.exercises)
  console.log(array)
  const total = array.reduce((s, p) => {
    console.log(s, p)
    return (s + p)
  })
  console.log(total)
  return (
    <div>
      Total Exercises: {total}
    </div>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header name = {course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  )
}

const App = () => {
  
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
      <div>
        <Course course = {course} />
      </div>
  )
}

ReactDOM.render (
  <App />, 
  document.getElementById('root')
)
