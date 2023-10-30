import './App.css'

import { Item } from './components/Item'
import { useItems } from './hooks/useItems'
import { useSEO } from './hooks/useSEO'

export type ItemID = `${string}-${string}-${string}-${string}-${string}`

export interface Item {
  id: ItemID
  timestamp: number
  text: string
}

function App() {
  const { items, addItem, removeItem } = useItems()
  useSEO({
    title: `${items.length} Prueba técnica de React`,
    desciption: 'Añadir y eliminar elementos de una lista en React'
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { elements } = event.currentTarget

    // const input = elements.namedItem('item') as HTMLInputElement
    const input = elements.namedItem('item')
    const isInput = input instanceof HTMLInputElement
    if (!isInput || input == null) return

    addItem(input.value)

    input.value = ''
  }

  const createHandleRemoveItem = (id: ItemID) => () => {
    removeItem(id)
  }

  return (
    <main>
      <aside>
        <h2>Añadir y eliminar elementos de una lista</h2>
        <form aria-label='Añadir elementos a la lista' onSubmit={handleSubmit}>
          <label>
            Elemento a introducir:
            <input
              name='item'
              required
              type="text"
              placeholder='Videojuegos 🎮'
            />
          </label>
          <button>
            Añadir elemento
          </button>
        </form>
      </aside>

      <section>
        <h2>Lista de elementos</h2>
        {
          items.length === 0 ? (
            <p>
              <strong>No hay elementos en la lista.</strong>
            </p>
          ) : (
            <ul>
              {
                items.map(item => {
                  return <Item {...item} key={item.id} handleClick={createHandleRemoveItem(item.id)} />
                })
              }
            </ul>
          )
        }
      </section>
    </main>
  )
}

export default App
