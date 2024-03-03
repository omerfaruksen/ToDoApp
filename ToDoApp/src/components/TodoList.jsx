import React, {useContext, useEffect} from 'react'
import { ToDoContext } from '../context/ToDoContext'
import {FaRegTrashAlt, FaPencilAlt, FaSave } from 'react-icons/fa'
import '../App.css'
import { FooterContext } from '../context/FooterContext'

function TodoList() {
    const {
        todoList,
        setTodoList,
        deleteTodo,
        complatedTodo,
        editTodo,
        newContent,
        savedTodo,
    } = useContext(ToDoContext)

    const {filtred} =useContext (FooterContext)

    //Storage veri ekleme çekme işlemleri
    useEffect(() => {
        const storedList = localStorage.getItem('todo')
        if(storedList){
            setTodoList(JSON.parse(storedList))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todoList))
    }, [todoList])

  return (
    <>
    <h3 className='header'> {todoList.length > 0 && 'List'}</h3>
    {/*Filtreleme işlemlerine göre mapleme */}
    {filtred && filtred.map((todo) => (
  <div key={todo.id} className='list'>
    <div
      className={todo.isComplated ? 'todo complated' : 'todo'}
      onClick={() => complatedTodo(todo.id)}
    >
      {todo.isEditable && !todo.isComplated ? (
        <input
          className='edit-input'
          placeholder={todo.text}
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        />
      ) : (
        todo.text
      )}
    </div>
    <div className="icons">
      {todo.isEditable && !todo.isComplated ? (
        <button className='btn save'onClick={() => savedTodo(todo.id)}>
          Save
        </button>
      ) : (
        <>
          <button className='btn edit' onClick={()=> editTodo(todo.id)}>
            Edit
          </button>
          <button className='btn delete' onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </>
      )}
    </div>
  </div>
))}
      
    </>
  )
}

export default TodoList
