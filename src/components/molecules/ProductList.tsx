import { FC, useEffect, useState } from 'react'
import { shallow } from 'zustand/shallow'
import { useCheckoutStore } from '../../store/useCheckoutStore'
import ProductCard from '../atoms/ProductCard'
import api from '../../service/api'
import { ProductDetails } from '../../types'
import ProductLoadingCard from '../atoms/ProductLoadingCard'

interface ProductsProps {
  isLoading: boolean
  error: string | null
  products: ProductDetails[]
}

const Products: FC<ProductsProps> = ({ isLoading, error, products }) => {
  const { selectedProducts, handleSelectProduct } = useCheckoutStore(
    (state) => ({
      selectedProducts: state.selectedProducts,
      handleSelectProduct: state.handleSelectProduct,
    }),
    shallow,
  )
  if (isLoading) {
    return (
      <>
        {Array(12)
          .fill(1)
          .map((val, index) => (
            <ProductLoadingCard key={index} />
          ))}
      </>
    )
  } else if (error) {
    return <div className='mt-12 px-6 text-center text-xl'>{error}</div>
  } else if (products.length === 0) {
    return <div className='mt-12 px-6 text-center text-xl'>New Products Coming Soon </div>
  }
  return (
    <>
      {products.map((product, index) => {
        const isSelected = selectedProducts.has(product?.id)
        const handleOnClick = () => {
          handleSelectProduct(product)
        }
        return (
          <ProductCard
            key={product?.id || index}
            product={product}
            onClick={handleOnClick}
            isSelected={isSelected}
          />
        )
      })}
    </>
  )
}

const ProductList = () => {
  const [products, setProducts] = useState<ProductDetails[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const getProducts = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const products = await api.get<ProductDetails[]>('/products?limit=20')
      setProducts(products)
    } catch (err) {
      setError('Something went wrong, Please try after some time')
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    getProducts()
  }, [])
  return (
    <>
      <h2 className='text-2xl font-medium text-center mb-4'>Men Jackets</h2>
      <ul className='flex flex-row flex-wrap justify-evenly'>
        <Products isLoading={isLoading} error={error} products={products} />
      </ul>
    </>
  )
}

export default ProductList
