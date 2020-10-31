import React from 'react'
import { render, screen } from '@testing-library/react'

import Login from '.'

describe('<Login/>', () => {
  it('should render title', () => {
    render(<Login />)

    expect(
      screen.getByRole('heading', { name: /Abner fonseca/i })
    ).toBeInTheDocument()
  }),
    it('should render correctly', () => {
      const { container } = render(<Login />)

      expect(container.firstChild).toMatchSnapshot()
    })
})
