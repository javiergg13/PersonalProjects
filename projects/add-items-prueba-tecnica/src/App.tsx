import { useState } from 'react'
import './App.css'

type ItemID = `${string}-${string}-${string}-${string}-${string}`

interface Item {
  id: ItemID
  timestamp: number
  text: string
}

const INITIAL_ITEMS: Item[] = [
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'Videojuegos 🎮'
  },
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'Libros 📚'
  },
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'Películas 📽️'
  },
]

function App() {
  const [items, setItems] = useState(INITIAL_ITEMS)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { elements } = event.currentTarget

    // const input = elements.namedItem('item') as HTMLInputElement
    const input = elements.namedItem('item')
    const isInput = input instanceof HTMLInputElement
    if (!isInput || input == null) return

    const newItem: Item = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      text: input.value
    }

    setItems(prevItems => {
      return [...prevItems, newItem]
    })

    input.value = ''
  }

  const createHandleRemoveItem = (id: ItemID) => () => {
    setItems(prevItems => {
      return prevItems.filter(currentItem => currentItem.id !== id)
    })
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
                  return (
                    <li key={item.id}>
                      {item.text}
                      <button onClick={createHandleRemoveItem(item.id)}>
                        ❌
                      </button>
                    </li>
                  )
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
