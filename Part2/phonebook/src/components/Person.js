import React from 'react'

const Person = ({name, number, delPerson}) => {
    return (
        <li>
            {name}: {number}
            <button onClick = {delPerson}>Delete</button>
        </li>
    )
}

export default Person