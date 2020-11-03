/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import CustomButtom from '../../shared/customButtom'
import Input from '../../shared/customInput'
import ProfileImage from '../../shared/profile_Image'
import { CustomDiv, Center } from './style'
import { Form } from '@unform/web'
import { useHistory, useParams } from 'react-router-dom'
import { FormHandles, SubmitHandler } from '@unform/core'
import { GetDragonDetail } from '../../services/DragonService'
import updateDragon from '../../services/DragonService/updateDragon'
import IDragonData from '../../interfaces/IDragonData'

interface Iparams {
  id: string
}

const EditDragon: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const [dataDragon, setDataDragon] = useState<IDragonData>()

  const { id } = useParams<Iparams>()

  const HandleSubmit: SubmitHandler = ({ ...data }, { reset }) => {
    try {
      const editDragon = async () => {
        await updateDragon(id, data)
      }
      editDragon()
      reset()
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    console.log(id)
    const loadDragonDetail = async () => {
      const response = await GetDragonDetail(id)

      setDataDragon(response)
    }

    loadDragonDetail()

    formRef.current?.setData({
      name: dataDragon?.name,
      type: dataDragon?.type
    })
  }, [id])

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
                name="name"
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
              <Input
                name="createdAt"
                required
                type="date"
                placeholder="capturado"
              />
            </div>
            <CustomButtom type="submit" text="Alterar dragão" />
          </Form>
        </div>
      </Center>
    </CustomDiv>
  )
}

export default EditDragon
