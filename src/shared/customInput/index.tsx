/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef } from 'react'

import { InputType } from './style'

import { useField } from '@unform/core'

interface InputProps {
  name: string
  type: string
  required: boolean
  placeholder: string
}

const Input: React.FC<InputProps> = ({ name, ...otherProps }) => {
  const { fieldName, registerField, defaultValue, error } = useField(name)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <>
      <InputType ref={inputRef} defaultValue={defaultValue} {...otherProps} />
    </>
  )
}

export default Input
