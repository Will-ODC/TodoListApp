export const createTodo = (text, priority, dueDate, tags) => ({
  id: Date.now(),
  text,
  completed: false,
  priority,
  dueDate,
  tags: tags ? tags.split(',').map(tag => tag.trim()).filter(Boolean) : [],
  createdAt: new Date().toISOString()
})

export const filterTodos = (todos, filter) => {
  switch (filter) {
    case 'active':
      return todos.filter(todo => !todo.completed)
    case 'completed':
      return todos.filter(todo => todo.completed)
    default:
      return todos
  }
}

export const getActiveTodosCount = (todos) => {
  return todos.filter(todo => !todo.completed).length
}