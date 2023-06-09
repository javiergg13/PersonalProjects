import { Products } from './components/Products'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { FiltersProvider } from './context/filters'

function App () {
  return (
    <FiltersProvider>
      <Header />
      <Products />
      <Footer />
    </FiltersProvider>
  )
}

export default App
