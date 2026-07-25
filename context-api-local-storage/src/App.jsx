import { useEffect, useState } from 'react'
import { ToDoProvider } from './Context'
import './App.css'
import TodoForm from './components/Form'
import TodoItem from './components/Item'


function App() {
  const [todo, settodo] = useState([])


  const addTodo = (todoText) => {

    const newtodo = {
      id: Date.now(),
      todoinput: todoText,
      isCompleted: false
    }

    settodo([...todo, newtodo]);
  }

  const updateTodo = (id, todoText) => {
    settodo(todo.map((item) => item.id === id ? { ...item, todoinput: todoText } : item))
  }

  const deleteTodo = (id) => {
    settodo(todo.filter((item) => item.id !== id))
  }

  const toggleTodo = (id) => {
    settodo(todo.map((item) => item.id === id ? { ...item, isCompleted: !item.isCompleted } : item))
  }

  useEffect(() => {
    const storedTodo = JSON.parse(localStorage.getItem('todo'));

    if (storedTodo && storedTodo.length > 0) {
      settodo(storedTodo);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo));
  }, [todo])


  return (
    <ToDoProvider value={{ todo, addTodo, deleteTodo, updateTodo, toggleTodo }}>

      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-col gap-y-3">
            {todo.map((item) => (
              <TodoItem key={item.id} todo={item} />
            ))}
          </div>
        </div>
      </div>

    </ToDoProvider>
  )
}

export default App
