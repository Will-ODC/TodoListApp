import { useState } from 'react'
import { DEFAULT_PRIORITY } from '../../constants'

export const TodoForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('')
  const [selectedPriority, setSelectedPriority] = useState(DEFAULT_PRIORITY)
  const [selectedDueDate, setSelectedDueDate] = useState('')
  const [selectedTags, setSelectedTags] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSubmit(inputValue, selectedPriority, selectedDueDate, selectedTags)) {
      setInputValue('')
      setSelectedPriority(DEFAULT_PRIORITY)
      setSelectedDueDate('')
      setSelectedTags('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What needs to be done?"
          className="w-full px-4 py-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
          <select
            value={selectedPriority}
            onChange={(e) => setSelectedPriority(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
          <input
            type="date"
            value={selectedDueDate}
            onChange={(e) => setSelectedDueDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tags (comma-separated)</label>
          <input
            type="text"
            value={selectedTags}
            onChange={(e) => setSelectedTags(e.target.value)}
            placeholder="e.g. Work, Personal"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Add Todo
      </button>
    </form>
  )
}