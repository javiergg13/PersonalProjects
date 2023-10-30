import { describe, expect, test } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useItems } from '../src/hooks/useItems'

describe('useItems hook', () => { 
  test('should add and remove items', () => {
    const { result } = renderHook(() => useItems())

    expect(result.current.items.length).toEqual(3)

    // asegurarnos que el método "asíncrono" acaba de ejecutarse
    act(() => {
      result.current.addItem('Jugar a videojuegos')
    })

    expect(result.current.items.length).toEqual(4)

    act(() => {
      result.current.removeItem(result.current.items[3].id)
    })

    expect(result.current.items.length).toEqual(3)

  })
})
