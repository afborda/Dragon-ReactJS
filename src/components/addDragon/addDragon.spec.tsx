import { render } from '@testing-library/react'
import React from 'react'
import AddDragon from '.'

describe('<AddDragon>', () => {
  it('should  render the heading', () => {
    const { container } = render(<AddDragon />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
