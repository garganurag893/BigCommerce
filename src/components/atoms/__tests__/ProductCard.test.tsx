import { render, fireEvent } from '@testing-library/react'

import ProductCard from '../ProductCard'

const productData = {
    id: 13,
    title: 'Mens Cotton Jacket',
    price: 55.99,
    description: 'Great outerwear jackets for Spring',
    category: 'mens clothing',
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    rating: { rate: 4.7, count: 500 },
  }

describe('Test ProductCard Component', () => {
  it('Check for ProductCard tag in DOM', () => {
    const onClickHandler = jest.fn()
    const { getByTestId } = render(
      <ProductCard
        product={productData}
        onClick={onClickHandler}
      />,
    )

    expect(getByTestId('product-card')).toBeInTheDocument()
    fireEvent.click(getByTestId('product-card'))

    expect(onClickHandler).toHaveBeenCalledTimes(1)
  })

  it('ProductCard Snapshot Test', () => {
    const onClickHandler = jest.fn()
    const { container } = render(
      <ProductCard
        product={productData}
        onClick={onClickHandler}
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it('ProductCard Selectec Snapshot Test', () => {
    const onClickHandler = jest.fn()
    const { container } = render(
      <ProductCard
        product={productData}
        isSelected
        onClick={onClickHandler}
      />,
    )
    expect(container).toMatchSnapshot()
  })
})
