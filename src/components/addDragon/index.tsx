/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState } from 'react'
import CustomButtom from '../../shared/customButtom/customInput'
import Input from '../../shared/customInput'
import ProfileImage from '../../shared/profile_Image'
import { CustomDiv, Center } from './style'
import { Form } from '@unform/web'
import { useHistory } from 'react-router-dom'
import { FormHandles, SubmitHandler } from '@unform/core'

interface ILoginFormData {
  email: string
  password: string
}

const AddDragon: React.FC = () => {
  const history = useHistory()
  const [isLoading, setIsLoading] = useState(false)
  const formRef = useRef<FormHandles>(null)

  const HandleSubmit: SubmitHandler<ILoginFormData> = (
    { ...data },
    { reset }
  ) => {
    try {
      setIsLoading(true)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <CustomDiv>
      <Center>
        <div>
          <div>
            <ProfileImage />
          </div>
          <Form ref={formRef} onSubmit={HandleSubmit}>
            <div>
              <Input
                name="Nome"
                required
                type="text"
                placeholder="Nome do dragão"
              />
              <Input
                name="type"
                required
                type="text"
                placeholder="Tipo de dragão"
              />
            </div>
            <CustomButtom type="submit" />
          </Form>
        </div>
      </Center>
    </CustomDiv>
  )
}

export default AddDragon
