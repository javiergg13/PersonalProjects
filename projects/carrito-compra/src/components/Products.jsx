import './Products.css'
import { products } from '../mocks/products.json'
import { AddToCartIcon } from './Icons'
import { useFilters } from '../hooks/useFilters'

export function Products () {
  const { filterProducts } = useFilters()

  return (
    <main className='products'>
      <ul>
        {filterProducts(products).map(product => (
          <li key={product.id}>
            <img
              src={product.thumbnail}
              alt={product.title}
            />
            <div>
              <strong>{product.title}</strong> - $ {product.price}
            </div>
            <div>
              <button>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
