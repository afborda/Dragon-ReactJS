import { render } from '@testing-library/react'
import React from 'react'
import ProfileImage from '.'

describe('<ProfileImage>', () => {
  it('should  render the heading', () => {
    const { container } = render(<ProfileImage />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
