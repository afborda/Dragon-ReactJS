import { render } from '@testing-library/react'
import React from 'react'
import CustomButtom from '.'

describe('<ListDragon/>', () => {
  it('should  render the heading', () => {
    const { container } = render(<CustomButtom />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
