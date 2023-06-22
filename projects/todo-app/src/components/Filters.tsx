import { FILTERS_BUTOONS } from '../consts'
import { FilterValue } from '../types'

interface Props {
  filterSelected: FilterValue
  onFilterChange: (filter: FilterValue) => void
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  return (
    <ul className='filters'>
      {
        Object.entries(FILTERS_BUTOONS).map(([key, { href, literal}]) => {
          return (
            <li key={key}>
              <a
                href={href}
                className={`${filterSelected === key ? 'selected' : ''}`}
                onClick={(event) => {
                  event.preventDefault()
                  onFilterChange(key as FilterValue)
                }}
              >
                {literal}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}
