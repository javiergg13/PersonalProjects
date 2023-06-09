import { Products } from './components/Products'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { FiltersProvider } from './context/filters'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'

function App () {
  return (
    <FiltersProvider>
      <Header />
      <CartProvider>
        <Cart />
        <Products />
        <Footer />
      </CartProvider>
    </FiltersProvider>
  )
}

export default App
