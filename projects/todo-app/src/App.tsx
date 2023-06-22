import { useState } from 'react'
import { Todos } from './components/Todos'
import { FilterValue, TodoTitle, type TodoId, type Todo as TodoType } from './types'
import { TODO_FILTERS } from './consts'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

const mockTodos = [
  {
    id: '1',
    title: 'todo 1 prueba',
    completed: true
  },
  {
    id: '2',
    title: 'todo 2',
    completed: false
  },
  {
    id: '3',
    title: 'todo 3',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(() => {
    // read from url query params using URLSearchParams
    const params = new URLSearchParams(window.location.search)
    const filter = params.get('filter') as FilterValue | null
    if (filter === null) return TODO_FILTERS.ALL
    // check filter is valid, if not return ALL
    return Object
      .values(TODO_FILTERS)
      .includes(filter)
      ? filter
      : TODO_FILTERS.ALL
  })

  const handleRemove = ({ id }: TodoId) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = (
    { id, completed }: Pick<TodoType, 'id' | 'completed'>
    ):void => {
      const newTodos = todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed
          }
        }

        return todo
      })

      setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
    const params = new URLSearchParams(window.location.search)
    params.set('filter', filter)
    window.history.pushState({}, '', `${window.location.pathname}?${params.toString()}`)
  }

  const handleClearCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }

    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length

  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {  
    if (filterSelected === TODO_FILTERS.ALL) return !todo.completed
    if (filterSelected === TODO_FILTERS.ACTIVE) return todo.completed
    return todo
  })

  return (
    <div className='todoapp'>
      <Header saveTodo={handleAddTodo}/>
      <Todos 
        onToggleCompletedTodo={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={filteredTodos} 
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleClearCompleted}
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App
