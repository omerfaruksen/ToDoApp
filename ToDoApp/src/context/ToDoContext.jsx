import React, { createContext, useState, useRef, useContext} from 'react'
import {v4 as uuid4 } from 'uuid'
import { FooterContext } from './FooterContext'

export const ToDoContext = createContext()

export const ToDoProvider = ({children}) => {
    const inputRef = useRef (null)
    //States
    const [ content, setContent]= useState('')
    const [ todoList, setTodoList] = useState([])
    const [ newContent, setNewContent] = useState('')

    //From submit olduğunda
    const addTodo=(event, content)=>{
        event.preventDefault()
        const newTodo= {
            id: uuid4(),
            text: content,
            isComplated: false,
            isEditable: false,
        }
        setTodoList([...todoList,newTodo])
        setContent('')
    }

    //tek bir todoyu silme
    const deleteTodo = (id) =>{
        setTodoList((prevList)=> prevList.filter((todo)=> todo.id !== id && todo))
    }

    //tek bir todoyu tamamlama
    const complatedTodo= (id) => {
        setTodoList((prevList)=>
            prevList.map((todo)=> 
                todo.id=== id && !todo.isEditable
                ? {...todo, isComplated: !todo.isComplated}
                : {...todo}
            )
        )
    }
    //Tek bit todo editleme
    const editTodo=(id) => {
        setTodoList((prevList)=>
        prevList.map((todo)=>
            todo.id===id ? {...todo, isEditable: !todo.isEditable} : todo
            )
        )
    }
    //yapılan değişikliğin kayıt edilmesi
    const savedTodo = (id) => {
        setTodoList((prevList)=>
            prevList.map((todo)=>
                newContent !== '' && todo.id === id? { ...todo, isEditable: false, text:newContent}
                :todo
            )
        )
        setNewContent('')
    }
    //Context propları
    const initialValues= {
        content,
        setContent,
        addTodo,
        todoList,
        setTodoList,
        deleteTodo,
        complatedTodo,
        editTodo,
        newContent,
        setNewContent,
        savedTodo,
        inputRef,
    }

    return(
        <ToDoContext.Provider value={initialValues}>
            {children}
        </ToDoContext.Provider>
    )
    
}