import './App.css'

import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const updateFact = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt={`Image extracted using the first word for ${fact}`} />}
      </section>
      <button onClick={updateFact}>Actualizar cita</button>
    </main>
  )
}
