import React, { useState } from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import './app.css'
import Counter from './components/Counter'
import Form from './components/Form'
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
            <Routes>
                <Route path="/" element={<Form/>} />
                <Route path="/counter" element={<Counter/>} />
            </Routes>
        </Router>
    </div>
  )
}

export default App