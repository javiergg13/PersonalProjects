import { useState } from 'react'
import { type Item } from '../App'

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

export const useItems = () => {
  const [items, setItems] = useState(INITIAL_ITEMS)

  const addItem = (text: string) => {
    const newItem: Item = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      text
    }

    setItems((prevItems) => {
      return [...prevItems, newItem]
    })

    
  }

  const removeItem = (id: string) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id)
    })
  }

  return {
    items, 
    addItem,
    removeItem
  }
}