import { IS_DEVELOPMENT } from '../config'
import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer () {
  const { filters } = useFilters()

  return (
    <footer className='footer'>
      <h4>Ejercicio Prueba Técnica React ⚛️ －
        <span>@javiergg13</span>
      </h4>
      <h5>Shooping Cart con useContext & useReducer</h5>
      {IS_DEVELOPMENT && JSON.stringify(filters, null, 2)}
    </footer>
  )
}
