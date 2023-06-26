import { render, fireEvent } from '@testing-library/react'

import Button from '../Button'

const sampleText = 'This is my first test'
const sampleClassName = 'testClass'

describe('Test Button Component', () => {
  it('Check for button tag in DOM', () => {
    const onClickHandler = jest.fn()
    const { getByRole, getByText } = render(
      <Button text={sampleText} onClick={onClickHandler} className={sampleClassName} />,
    )

    expect(getByRole('button')).toBeInTheDocument()
    expect(getByText(sampleText)).toBeInTheDocument()
    expect(getByRole('button')).toHaveClass(sampleClassName)

    fireEvent.click(getByRole('button'))

    expect(onClickHandler).toHaveBeenCalledTimes(1)
  })

  it('Button Snapshot Test', () => {
    const onClickHandler = jest.fn()
    const { container } = render(<Button text={sampleText} onClick={onClickHandler} />)
    expect(container).toMatchSnapshot()
  })

  it('Button Disabled Snapshot Test', () => {
    const onClickHandler = jest.fn()
    const { container } = render(
      <Button text={sampleText} disabled onClick={onClickHandler}>
        {sampleText}
      </Button>,
    )
    expect(container).toMatchSnapshot()
  })

  it('Button Loading Snapshot Test', () => {
    const onClickHandler = jest.fn()
    const { container } = render(<Button text={sampleText} isLoading onClick={onClickHandler} />)
    expect(container).toMatchSnapshot()
  })
})
