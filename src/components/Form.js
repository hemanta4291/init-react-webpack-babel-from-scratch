import React from 'react'
import useInput from '../hooks/useInput'

const Form = () => {
    const [name,bindName,resetName] = useInput("")
    const [email,bindEmail,resetEmail] = useInput("")
    const handleSubMit = (e) =>{
        e.preventDefault()
        alert(`name:${name}- email:${email}`)
        resetName()
        resetEmail()
    }
  return (
    <div>
        <form onSubmit={handleSubMit}>
            <div>
                <input {...bindName} placeholder='Name' type="text"/>
            </div>
            <div>
                <input {...bindEmail} placeholder='Email' type="email" />
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form