import { useState } from 'react'
import { DEFAULT_TAGS } from '../../constants'

export const TagManager = () => {
  const [availableTags, setAvailableTags] = useState(DEFAULT_TAGS)
  const [newTag, setNewTag] = useState('')

  const addNewTag = () => {
    if (newTag.trim() && !availableTags.includes(newTag.trim())) {
      setAvailableTags([...availableTags, newTag.trim()])
      setNewTag('')
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm font-medium text-gray-700">Available Tags:</span>
        {availableTags.map(tag => (
          <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          placeholder="Add new tag"
          className="flex-1 px-3 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addNewTag}
          className="px-3 py-1 bg-gray-500 text-white rounded-md hover:bg-gray-600 text-sm"
        >
          Add Tag
        </button>
      </div>
    </div>
  )
}