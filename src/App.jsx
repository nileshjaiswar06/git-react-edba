import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async() => {
    setLoading(true)
    const response = await fetch(`https://fakestoreapi.com/products`)
    const data = await response.json()

    setProduct(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div>
        {loading ? (<p>Product Loading...</p>) : (
          <ul>
            {product.map((item) => (
              <li key={item.id}>
                <h2>{item.title}</h2>
                <p>Price: ${item.price}</p>
                <p>Description : {item.description}</p>
                <img src={item.image} alt={item.title} style={{ maxWidth: '100px' }} />
                <a href={`/product/${item.id}`}>View Product</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default App