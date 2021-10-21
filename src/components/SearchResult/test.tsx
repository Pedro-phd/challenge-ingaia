import { render, screen } from '@testing-library/react'

import SearchResult from '.'

describe('<SearchResult />', () => {
  it('should render the heading', () => {
    const { container } = render(<SearchResult />)

    expect(
      screen.getByRole('heading', { name: /SearchResult/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
