import { render, screen } from '@testing-library/react'

import Character from '.'

describe('<Character />', () => {
  it('should render the heading', () => {
    const { container } = render(<Character />)

    expect(
      screen.getByRole('heading', { name: /Character/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
