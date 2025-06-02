import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { SortableItem } from '../SortableItem'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos, onToggle, onDelete, onUpdate, onReorder }) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const handleDragEnd = (event) => {
    const { active, over } = event

    if (active.id !== over.id) {
      const oldIndex = todos.findIndex(item => item.id === active.id)
      const newIndex = todos.findIndex(item => item.id === over.id)
      onReorder(oldIndex, newIndex)
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={todos.map(todo => todo.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="bg-white rounded-lg shadow-md">
          {todos.length === 0 ? (
            <p className="text-center text-gray-500 py-8">No todos to display</p>
          ) : (
            todos.map((todo, index) => (
              <SortableItem key={todo.id} id={todo.id}>
                {(listeners) => (
                  <div className={index !== todos.length - 1 ? 'border-b' : ''}>
                    <TodoItem
                      todo={todo}
                      onToggle={onToggle}
                      onDelete={onDelete}
                      onUpdate={onUpdate}
                      dragHandleProps={listeners}
                    />
                  </div>
                )}
              </SortableItem>
            ))
          )}
        </div>
      </SortableContext>
    </DndContext>
  )
}