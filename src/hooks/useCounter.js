import { useState } from 'react'

const useCounter = (initial=0,value) => {
    const [count,setCount] = useState(initial)

    const inCriment = () => {
        setCount((prev)=>prev+value)
    }
    const deCriment = () => {
        setCount((prev)=>prev-value)
    }

    const reset = () => {
        setCount(0)
    }

    return [count,inCriment,deCriment,reset]
}

export default useCounter