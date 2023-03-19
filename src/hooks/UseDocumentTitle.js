import { useEffect, useState } from "react"


const UseDocumentTitle = (value="default title") => {
  const[title,setTitle] = useState(value)

  useEffect(()=>{
    setTitle(value)
    document.title = title
  },[title,value])
}

export default UseDocumentTitle