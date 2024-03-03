import React from 'react'
import './App.css'
import { ToDoProvider } from './context/ToDoContext'
import FormTodo from './components/FormTodo'
import TodoList from './components/TodoList'
import Footer from './components/Footer'
import { FooterProvider } from './context/FooterContext'

function App() {
  return (
   <div className="App">
      <h1 className='header'> TO DO APP</h1>
      <ToDoProvider>
        <FooterProvider>
          <FormTodo />
          <TodoList />
          <Footer />
        </FooterProvider>
      </ToDoProvider>
   </div>
  )
}

export default App
