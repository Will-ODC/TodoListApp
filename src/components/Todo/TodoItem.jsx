import { useState } from 'react'
import { format } from 'date-fns'
import { PRIORITY_COLORS, PRIORITY_BADGES } from '../../constants'

export const TodoItem = ({ todo, onToggle, onDelete, onUpdate, dragHandleProps }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editingText, setEditingText] = useState(todo.text)

  const handleSaveEdit = () => {
    if (onUpdate(todo.id, editingText)) {
      setIsEditing(false)
    }
  }

  const handleCancelEdit = () => {
    setEditingText(todo.text)
    setIsEditing(false)
  }

  return (
    <div className={`border-l-4 ${PRIORITY_COLORS[todo.priority]} p-4`}>
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="mt-1 w-5 h-5 text-blue-500 rounded focus:ring-blue-500 cursor-pointer"
        />
        
        <div className="flex-1">
          {isEditing ? (
            <div className="flex gap-2">
              <input
                type="text"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
                className="flex-1 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
              />
              <button
                onClick={handleSaveEdit}
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Save
              </button>
              <button
                onClick={handleCancelEdit}
                className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-start justify-between">
                <div className="flex-1" {...dragHandleProps} style={{ cursor: 'move' }}>
                  <p className={`text-lg ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                    {todo.text}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${PRIORITY_BADGES[todo.priority]}`}>
                      {todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1)} Priority
                    </span>
                    {todo.dueDate && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                        Due: {format(new Date(todo.dueDate), 'MMM d, yyyy')}
                      </span>
                    )}
                    {todo.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="text-blue-500 hover:text-blue-700 p-1"
                    type="button"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => onDelete(todo.id)}
                    className="text-red-500 hover:text-red-700 p-1"
                    type="button"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}