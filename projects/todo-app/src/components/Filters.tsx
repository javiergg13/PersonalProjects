import { TODO_FILTERS, FILTERS_BUTOONS } from '../consts'

interface Props {
  filterSelected: typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
  onFilterChange: (filter: TODO_FILTERS) => void
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  return (
    <ul className='filters'>
      <li>
        <a
          className={`${filterSelected === 'all' ? 'selected' : ''}`}
          onClick={() => onFilterChange('all')}
        >
          Todos
        </a>
      </li>
      <li>
        <a
          className={`${filterSelected === 'active' ? 'selected' : ''}`}
          onClick={() => onFilterChange('active')}
        >
          Activos
        </a>
      </li>
      <li>
        <a
          className={`${filterSelected === 'completed' ? 'selected' : ''}`}
          onClick={() => onFilterChange('completed')}
        >
          Completados
        </a>
      </li>
    </ul>
  )

}
