import React, {useState, useEffect} from 'react'
import Person from './Person'
import Filter from './Filter'
import PersonForm from './PersonForm'
import personService from './services/persons'
import Notification from './Notification'
import Message from './Message'

const App = () => {
    
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)
    const [message, setMessage] = useState(null)
    
    useEffect(() => {
        personService
        .getAll()
        .then(initialPersons => {
            setPersons(initialPersons)
        })
    }, [])

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }
    const handleFilter = (event) => {
        setFilter(event.target.value)
    }

    const deletePerson = id => {
        
        const person = persons.find(person => person.id === id)
        if(window.confirm('Delete ' + person.name + '?')) {
            personService
            .deleteObject(id)
            .catch((err) => {
                setErrorMessage('This number has already been deleted from the server.')
                setTimeout(() => {
                    setErrorMessage(null)
                }, 3000)
            })
            .then(response => {
                setMessage('The number has been deleted.')
                setTimeout(() => {
                    setMessage(null)
                }, 3000)
                setPersons(persons.filter(person => person.id !== id))
            })
        }
    }
    
    const addName = (event) => {
        event.preventDefault()
        const checkName = persons.some(person => person.name === newName)
        if(!checkName) {
            const phoneObject = {
                name: newName,
                number: newNumber,
                date: new Date().toISOString()
            }
            personService
            .create(phoneObject)
            .then(returnedPerson => {
                setMessage('The number has been added.')
                setTimeout(() => {
                    setMessage(null)
                }, 3000)
                setPersons(persons.concat(returnedPerson))
            })
            setNewName('')
            setNewNumber('')
        } 
        else
            window.alert(newName + ' is already added to the phonebook')        
    }
    
    return (
        <div>
            <h1>Phonebook</h1>
            <Notification message = {errorMessage} />
            <Message message = {message} />
            <h2>Search</h2>
            <Filter value = {filter} onChange = {handleFilter} />
            <h2>Add a number</h2>
            <PersonForm addName = {addName} newName = {newName} 
            handleNameChange = {handleNameChange} handleNumberChange = {handleNumberChange} />
            <h2>Numbers</h2>
            <ul>
                {persons.map((person) => {
                    if(person.name.toLowerCase().includes(filter.toLowerCase())) {
                        return <Person key = {person.id} name = {person.name} number = {person.number} 
                                delPerson = {() => deletePerson(person.id)} /> 
                    }
                    else
                        return <div key = {person.id}></div>
                })}
            </ul>
        </div>
    )
}

export default App
