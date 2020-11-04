import { render } from '@testing-library/react'
import React from 'react'
import Login from '.'

describe('<ListDragon/>', () => {
  it('should  render the heading', () => {
    const { container } = render(<Login />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
