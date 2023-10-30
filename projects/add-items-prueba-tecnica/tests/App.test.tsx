import React from 'react'
import userEvent from '@testing-library/user-event'
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../src/App'

/*
describe('<App />', () => {
  test('test', () => {
    render(<App />)
    screen.debug()

    expect(
      screen.getByText('Añadir y eliminar elementos de una lista')
    ).toBeDefined()
  })
}) 
*/

// test e2e
describe('<App />', () => {
  test('shoud add a new item and remove the item', async () => {
    const user = userEvent.setup()

    render(<App />)

    // buscar el input
    const input = screen.getByRole('textbox')
    expect(input).toBeDefined()

    // buscar el form
    const form = screen.getByRole('form')
    expect(form).toBeDefined()

    // buscar el boton
    const button = form.querySelector('button')
    expect(button).toBeDefined()

    // simalar qu eel usuario escriba y agregue el nuevo elemento
    const randomText = crypto.randomUUID()
    await user.type(input, randomText)
    await user.click(button!)

    // buscar la lista y asegurarnos eque se ha agregado el elemento
    const list = screen.getByRole('list')
    expect(list).toBeDefined()

    expect(list.children.length).toBe(4)

    // asegurarnos que se ha eliminado el elemento
    const item = screen.getByText(randomText)
    const buttonToRemove = item.querySelector('button')
    expect(buttonToRemove).toBeDefined()

    await user.click(buttonToRemove!)
    expect(list.children.length).toBe(3)
  })
}) 
