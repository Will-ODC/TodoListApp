import { useState } from 'react'
import { TodoForm, TodoList, TodoStats, FilterBar, TagManager } from './components/Todo'
import { useTodos } from './hooks/useTodos'
import { filterTodos, getActiveTodosCount } from './utils/todoUtils'
import { FILTER_TYPES } from './constants'

function App() {
  const [filter, setFilter] = useState(FILTER_TYPES.ALL)
  const { todos, addTodo, toggleTodo, deleteTodo, updateTodo, clearCompleted, reorderTodos } = useTodos()

  const filteredTodos = filterTodos(todos, filter)
  const activeTodosCount = getActiveTodosCount(todos)

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Todo List</h1>
        
        <TodoForm onSubmit={addTodo} />
        
        <TagManager />
        
        <FilterBar currentFilter={filter} onFilterChange={setFilter} />
        
        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onUpdate={updateTodo}
          onReorder={reorderTodos}
        />
        
        <TodoStats
          activeTodosCount={activeTodosCount}
          onClearCompleted={clearCompleted}
        />
      </div>
    </div>
  )
}

export default App