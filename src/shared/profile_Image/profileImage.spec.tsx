import React from 'react'
import { render } from '@testing-library/react'

import ProfileImage from '.'

describe('<Login/>', () => {
  it('should render correctly', () => {
    const { container } = render(<ProfileImage />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
