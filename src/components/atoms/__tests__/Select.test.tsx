import { render, fireEvent } from '@testing-library/react'

import Select from '../Select'

const options = ['BMW', 'Merceded']

describe('Test Select Component', () => {
  it('Check for Select tag in DOM', () => {
    const onClickHandler = jest.fn()
    const { getByTestId, getByText } = render(
      <Select options={options} className='test' onClick={onClickHandler} />,
    )

    expect(getByTestId('dropdown')).toBeInTheDocument()
    expect(getByText('BMW')).toBeInTheDocument()
    expect(getByTestId('dropdown')).toHaveClass('test')

    fireEvent.click(getByTestId('dropdown'))

    expect(onClickHandler).toHaveBeenCalledTimes(1)
  })

  it('Select Snapshot Test', () => {
    const { container } = render(<Select options={options} className='test' />)
    expect(container).toMatchSnapshot()
  })
})
