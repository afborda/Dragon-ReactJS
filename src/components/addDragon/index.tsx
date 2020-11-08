/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState } from 'react'
import CustomButtom from '../../shared/customButtom'
import Input from '../../shared/customInput'
import ProfileImage from '../../shared/profile_Image'
import AddDragonData from '../../services/DragonService/addDragon'
import { CustomDiv, Center } from './style'
import { Form } from '@unform/web'
import { FormHandles, SubmitHandler } from '@unform/core'
import { useHistory } from 'react-router-dom'

const AddDragon: React.FC = () => {
  const history = useHistory()

  const formRef = useRef<FormHandles>(null)

  const HandleSubmit: SubmitHandler = async ({ ...data }, { reset }) => {
    try {
      data.histories = data.histories.split(' ')
      await AddDragonData(data)

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

              <Input
                name="histories"
                required
                type="text"
                placeholder="História deste dragão"
              />
            </div>
            <CustomButtom type="submit" text="Adicionar dragão" />
          </Form>
        </div>
      </Center>
    </CustomDiv>
  )
}

export default AddDragon
