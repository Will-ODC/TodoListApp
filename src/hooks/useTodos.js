import { useState, useEffect } from 'react'
import { loadTodos, saveTodos } from '../utils/storage'
import { createTodo } from '../utils/todoUtils'

export const useTodos = () => {
  const [todos, setTodos] = useState(() => loadTodos())

  useEffect(() => {
    saveTodos(todos)
  }, [todos])

  const addTodo = (text, priority, dueDate, tags) => {
    if (text.trim()) {
      const newTodo = createTodo(text, priority, dueDate, tags)
      setTodos([...todos, newTodo])
      return true
    }
    return false
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const updateTodo = (id, text) => {
    if (text.trim()) {
      setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, text } : todo
      ))
      return true
    }
    return false
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const reorderTodos = (oldIndex, newIndex) => {
    const newTodos = [...todos]
    const [removed] = newTodos.splice(oldIndex, 1)
    newTodos.splice(newIndex, 0, removed)
    setTodos(newTodos)
  }

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodo,
    clearCompleted,
    reorderTodos
  }
}