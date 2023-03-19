import React from 'react'
import useCounter from '../hooks/useCounter'

const Counter = () => {
    const[count,inCriment,deCriment,reset] = useCounter(2,2)
  return (
    <div>
        <h2>Counter : {count}</h2>
        <button onClick={inCriment}>inCriment</button>
        <button onClick={deCriment}>deCriment</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default Counter