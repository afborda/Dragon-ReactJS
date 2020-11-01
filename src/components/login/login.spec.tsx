import React from 'react'
import { render } from '@testing-library/react'

import Login from '.'

describe('<Login/>', () => {
  it('should render correctly', () => {
    const { container } = render(<Login />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
