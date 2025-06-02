export const TodoStats = ({ activeTodosCount, onClearCompleted }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mt-4 flex justify-between items-center">
      <span className="text-gray-700">{activeTodosCount} active items</span>
      <button
        onClick={onClearCompleted}
        className="text-red-500 hover:text-red-700 transition"
      >
        Clear completed
      </button>
    </div>
  )
}