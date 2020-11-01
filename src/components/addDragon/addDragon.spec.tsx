import React from 'react'
import { render } from '@testing-library/react'

import AddDragon from '.'

describe('<Login/>', () => {
  it('should render correctly', () => {
    const { container } = render(<AddDragon />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
