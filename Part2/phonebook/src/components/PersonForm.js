import React from 'react'

const PersonForm = 
({addName, newName, newNumber, handleNameChange, handleNumberChange}) => {
    return (
        <div>
            <form onSubmit = {addName}>
                name: <input value = {newName} onChange = {handleNameChange} /><br></br>
                number: <input value = {newNumber} onChange = {handleNumberChange} /><br></br>
                <button type = "submit">Add</button>
            </form>
        </div>
    )
}
export default PersonForm