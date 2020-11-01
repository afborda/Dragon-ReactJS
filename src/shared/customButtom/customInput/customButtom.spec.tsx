import React from 'react'
import { render } from '@testing-library/react'

import CustomButtom from '.'

describe('<Login/>', () => {
  it('should render correctly', () => {
    const { container } = render(
      <CustomButtom type="text" placeholder="teste" />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
