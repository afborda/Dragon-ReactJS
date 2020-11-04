import { render } from '@testing-library/react'
import React from 'react'
import ListDragon from '.'

describe('<ListDragon/>', () => {
  it('should  render the heading', () => {
    const { container } = render(<ListDragon />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
