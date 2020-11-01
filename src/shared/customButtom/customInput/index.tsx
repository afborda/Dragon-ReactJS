import React from 'react'

import { Buttom } from './style'

interface IcustomInput {
  type: string
  placeholder?: string
  text?: string
}

const CustomButtom: React.FC<IcustomInput> = ({ type, placeholder, text }) => {
  return (
    <div>
      <Buttom type={type} placeholder={placeholder}>
        {text}
      </Buttom>
    </div>
  )
}

export default CustomButtom
