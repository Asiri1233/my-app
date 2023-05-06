"use client"

import {useState} from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

const TodoList = () => {
  const [todos, setTodos] = useState([])
  return (
    <div className='w-[80%]  m-auto flex flex-col items-center bg-white min-h-[90vh]'>
    <h2 className='text-3xl font-bold'>My Todos</h2>
      <TodoInput todos={todos} setTodos={setTodos}/>
      <div className='w-[80%] mx-auto'>
       {todos.map ((item, index) => {
        return <TodoItem 
        todos={todos} setTodos={setTodos}
        key={item.id} index={index + 1} todo={item}/>
       })}
      </div>
      </div>
  )
}

export default TodoList