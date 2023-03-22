import React from 'react'

const FormValidation = () => {
  return (
    <div>
        <input pattern="^[A-Za-z0-9]{3,16}$"
      required="true" />
    </div>
  )
}

export default FormValidation