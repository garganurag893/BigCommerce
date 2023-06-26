import { render, fireEvent } from '@testing-library/react'

import Input from '../Input'

const sampleText = 'First Name'
const sampleClassName = 'testClass'
const sampleHelperText = 'Some random name'

describe('Test Input Component', () => {
  it('Check for Input tag in DOM', () => {
    const onClickHandler = jest.fn()
    const { getByRole, getByText } = render(
      <Input
        label={sampleText}
        helperText={sampleHelperText}
        error={sampleHelperText}
        className={sampleClassName}
        onClick={onClickHandler}
        grid={1}
      />,
    )

    expect(getByRole('textbox')).toBeInTheDocument()
    expect(getByText(sampleText)).toBeInTheDocument()
    expect(getByRole('textbox')).toHaveClass(sampleClassName)

    fireEvent.click(getByRole('textbox'))

    expect(onClickHandler).toHaveBeenCalledTimes(1)
  })

  it('Input Snapshot Test', () => {
    const { container } = render(
      <Input
        label={sampleText}
        helperText={sampleHelperText}
        className={sampleClassName}
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it('Input Grid 2 Snapshot Test', () => {
    const { container } = render(
      <Input
        label={sampleText}
        helperText={sampleHelperText}
        className={sampleClassName}
        grid={2}
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it('Input Grid 3 Snapshot Test', () => {
    const { container } = render(
      <Input
        label={sampleText}
        helperText={sampleHelperText}
        className={sampleClassName}
        grid={3}
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it('Input With Error Snapshot Test', () => {
    const { container } = render(
      <Input
        label={sampleText}
        error={sampleHelperText}
        className={sampleClassName}
        grid={3}
      />,
    )
    expect(container).toMatchSnapshot()
  })
})
