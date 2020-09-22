import React from 'react'

const Total = ({parts}) => {
    const array = parts.map(part => part.exercises)
    const total = array.reduce((s, p) => s + p )
    
    return (
      <div>
        Total Exercises: <b>{total}</b>
      </div>
    )
}

export default Total