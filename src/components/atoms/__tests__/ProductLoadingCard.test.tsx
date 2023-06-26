import { render } from '@testing-library/react'

import ProductLoadingCard from '../ProductLoadingCard'

describe('Test ProductLoadingCard Component', () => {
  it('ProductLoadingCard Snapshot Test', () => {
    const { container } = render(<ProductLoadingCard />)
    expect(container).toMatchSnapshot()
  })
})
