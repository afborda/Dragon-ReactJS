/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState } from 'react'
import CustomButtom from '../../shared/customButtom/customInput'
import Input from '../../shared/customInput'
import ProfileImage from '../../shared/profile_Image'
import AddDragonData from '../../service/externalApi/addDragon'
import { CustomDiv, Center } from './style'
import { Form } from '@unform/web'
import { FormHandles, SubmitHandler } from '@unform/core'
import { useHistory } from 'react-router-dom'

const AddDragon: React.FC = () => {
  const history = useHistory()

  const formRef = useRef<FormHandles>(null)

  const HandleSubmit: SubmitHandler = ({ ...data }, { reset }) => {
    try {
      const addDragon = async () => {
        const response = await AddDragonData(data)
      }
      addDragon()

      history.push('/')
      reset()
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
                name="type"
                required
                type="text"
                placeholder="Tipo de dragão"
              />
              <Input name="date" required type="date" placeholder="capturado" />
            </div>
            <CustomButtom type="submit" text="Adicionar dragão" />
          </Form>
        </div>
      </Center>
    </CustomDiv>
  )
}

export default AddDragon
