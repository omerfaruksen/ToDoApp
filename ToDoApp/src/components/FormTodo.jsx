import React, {useContext, useEffect} from 'react'
import { ToDoContext } from '../context/ToDoContext'

function FormTodo() {
    const {content, setContent, addTodo, inputRef} = useContext(ToDoContext)

    //input focus
    useEffect(() => {
        inputRef.current.focus()
    }, [content])

    //Yeni Todo Oluşturma
  return (
    <form onSubmit={() => addTodo(event,content)}>
        <input
         type="text"
         placeholder='What are you planning to do today?'
         value={content}
         onChange={(e) => setContent(e.target.value)}
         ref={inputRef}
        />
        <button type='submit' disabled={!content} className='btn-add'>Add</button>
    </form>
  )
}

export default FormTodo
