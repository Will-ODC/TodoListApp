import { FILTER_TYPES } from '../../constants'

export const FilterBar = ({ currentFilter, onFilterChange }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex justify-center gap-2">
        {Object.entries(FILTER_TYPES).map(([key, value]) => (
          <button
            key={key}
            onClick={() => onFilterChange(value)}
            className={`px-4 py-2 rounded-md transition ${
              currentFilter === value
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {key.charAt(0) + key.slice(1).toLowerCase()}
          </button>
        ))}
      </div>
    </div>
  )
}