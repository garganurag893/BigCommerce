import { render } from '@testing-library/react'

import Header from '../Header'

describe('Test Header Component', () => {
  it('Header Snapshot Test', () => {
    const { container } = render(<Header />)
    expect(container).toMatchSnapshot()
  })
})
