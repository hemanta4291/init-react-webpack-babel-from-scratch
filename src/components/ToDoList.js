import React, { useState } from 'react'
import { TodoListWrapper } from './styled/TodoList.styled'

const ToDoList = () => {
    const [checked,setChecked] = useState([])
    const [title,setTitle] = useState('')
    const [todoLists,setTodoLists] = useState([
        "play game",
        "play football",
        "eat food"
    ])
    const handleCheckd = (event) =>{
        let updatedList = [...checked];
        console.log(checked)
        if (event.target.checked) {
        updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    }

    // add item
    const handleSubmit = (e) => {
        let sameTitle = todoLists.includes(title)
        e.preventDefault()
        if(!sameTitle){
            
            setTodoLists((prev)=>[...prev,title])
            setTitle('')
        }else{
            console.log("this title is all ready book ! plz try another title")
            setTitle('')
            // return false
        }
        
        
    }

    // remove item
    const handleClose = (index) => {
        todoLists.splice(index,1)
        setTodoLists([...todoLists] )
    }

    //add class
    const  isChecked = (item) => checked.includes(item) ? "checked_item" : "";

  return (
    <TodoListWrapper>
        <form onSubmit={handleSubmit}>
            <input type="text"  value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='type to do'/>
            <button>Create</button>
        </form>
        
        <ul>
            {
                todoLists?.map((list,i)=>(
                    <li key={list}>
                        <input onChange={handleCheckd} value={list} className={isChecked(list)}  type="checkbox" />
                        {list}
                        <div className='close' onClick={()=>handleClose(i)}>
                            X
                        </div>
                        </li>
                ))
            }
            
        </ul>
    </TodoListWrapper>
  )
}

export default ToDoList