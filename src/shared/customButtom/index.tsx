import React from 'react'

import { Buttom } from './style'

type ButtonTypes = 'button' | 'submit' | 'reset'

interface IcustomInput {
  type?: ButtonTypes
  placeholder?: string
  text?: string
}

const CustomButtom: React.FC<IcustomInput> = ({ type, text }) => {
  return (
    <div>
      <Buttom type={type}>{text}</Buttom>
    </div>
  )
}

export default CustomButtom
