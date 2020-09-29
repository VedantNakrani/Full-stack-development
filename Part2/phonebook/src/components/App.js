import React, {useState, useEffect} from 'react'
import Person from './Person'
import Filter from './Filter'
import PersonForm from './PersonForm'
import personService from './services/persons'

const App = () => {
    
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    
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
        
        let deleted = true
        const person = persons.find(person => person.id === id)
        if(window.confirm('Delete ' + person.name + '?')) {
            personService
            .deleteObject(id)
            .catch((err) => {
                console.log(err)
                deleted = false
            })
            .then(response => {
                if(deleted) {
                    setPersons(persons.filter(person => person.id !== id))
                }
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