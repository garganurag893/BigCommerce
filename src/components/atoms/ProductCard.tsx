import { FC } from 'react'
import { ProductDetails } from '../../types'

interface ProductCardProps {
  product: ProductDetails
  isSelected?: boolean
  onClick?: () => void
}

const ProductCard: FC<ProductCardProps> = ({ product, isSelected = false, onClick }) => {
  const { image, title, rating, price } = product || {}
  return (
    <li
      data-testid='product-card'
      onClick={onClick}
      className={`mx-3 my-6 flex flex-col justify-between max-w-xxs sm:w-72 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg hover:scale-105 duration-300 ${
        isSelected ? 'bg-black shadow-xl' : ''
      }`}
    >
      <div>
        <div className='relative h-64 w-full'>
          <img src={image} alt={title} className='object-contain h-full w-full bg-white' />
          <div className='absolute bottom-2 right-2 bg-gray-300/40 flex flex-row items-center px-1 rounded-sm'>
            <img src='/assets/png/star.png' alt='Star' height={16} width={16} />
            <p className='ml-2 font-semibold text-sm'>{rating.rate}</p>
          </div>
        </div>
        <p className={`font-bold text-base p-2 ${isSelected ? 'text-white' : 'text-black'}`}>
          {title}
        </p>
      </div>
      <p className={`p-2 text-xs font-bold ${isSelected ? 'text-white' : 'text-black'}`}>
        $ {price}
      </p>
    </li>
  )
}

export default ProductCard
