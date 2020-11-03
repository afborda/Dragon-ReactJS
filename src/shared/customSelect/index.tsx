import React, { useRef, useState, useEffect } from 'react'
import ReactDatePicker from 'react-datepicker'
import { useField } from '@unform/core'
import 'react-datepicker/dist/react-datepicker.css'

interface DatePickerProps {
  name: string
  type: string
  placeholder: string
}

const DatePicker: React.FC<DatePickerProps> = ({ name, ...rest }) => {
  const datepickerRef = useRef(null)
  const { fieldName, registerField, defaultValue } = useField(name)
  const [date, setDate] = useState(defaultValue || null)
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      path: 'props.selected',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      clearValue: (ref: any) => {
        ref.clear()
      }
    })
  }, [fieldName, registerField])
  return (
    <ReactDatePicker
      ref={datepickerRef}
      selected={date}
      onChange={setDate}
      {...rest}
    />
  )
}
export default DatePicker
