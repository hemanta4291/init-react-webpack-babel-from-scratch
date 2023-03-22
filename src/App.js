import React, { useState } from 'react'
import { BrowserRouter as Router,NavLink,Route,Routes } from 'react-router-dom'
import './app.css'
import Counter from './components/Counter'
import Form from './components/Form'
import FormValidation from './components/FormValidation'
import ToDoList from './components/ToDoList'
import UseDocumentTitle from './hooks/UseDocumentTitle'

const App = () => {
    const [title,setTitle] = useState("Mani App")
    UseDocumentTitle(title)

    const handleTitle = () => {
        let random = Math.floor(Math.random() * 100)
        setTitle(`Main Title - ${random}`)
    }
  return (
    <div>
        <h1>WOW CONGRASULATIONS !!</h1>
        <button onClick={handleTitle}>Change title</button>
        <Router>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/counter">Counter</NavLink></li>
                <li><NavLink to="/form-validation">Form Validation</NavLink></li>
                <li><NavLink to="/todo">To Do List</NavLink></li>
            </ul>
            <Routes>
                <Route exact path="/" element={<Form/>} />
                <Route path="/counter" element={<Counter/>} />
                <Route path="/form-validation" element={<FormValidation/>} />
                <Route path="/todo" element={<ToDoList/>} />
            </Routes>
        </Router>
    </div>
  )
}

export default App