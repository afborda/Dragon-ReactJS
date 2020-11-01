/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState } from 'react'
import { FormHandles, SubmitHandler } from '@unform/core'
import { Form } from '@unform/web'
import { NavLink } from 'react-router-dom'

import Input from '../../shared/customInput'
import ProfileImage from '../../shared/profile_Image'
import PlusCircle from '../../assets/icons/plus-circle.png'

import { CustomDiv, Wellcome, ImaIcon, ConfigTame, ContainerDiv } from './style'
import ListDragon from '../listDragons'

const mockDragon = [
  {
    id: '12',
    createdAt: '2020-10-28T20:13:26.439Z',
    name: 'Gregg',
    type: 'maroon',
    histories: []
  },
  {
    id: '14',
    createdAt: '2020-10-28T04:29:54.182Z',
    name: 'Justice',
    type: 'black',
    histories: []
  },
  {
    id: '16',
    createdAt: '2020-10-28T02:23:26.673Z',
    name: 'Timmothy',
    type: 'indigo',
    histories: []
  },
  {
    id: '17',
    createdAt: '2020-10-29T15:26:08.580Z',
    name: 'Lizeth',
    type: 'teal',
    histories: []
  },
  {
    id: '18',
    createdAt: '2020-10-29T04:46:43.031Z',
    name: 'Ralph',
    type: 'black',
    histories: []
  },
  {
    id: '19',
    createdAt: '2020-10-28T23:22:44.856Z',
    name: 'Madge',
    type: 'lime',
    histories: []
  },
  {
    id: '21',
    createdAt: '2020-10-29T12:46:26.646Z',
    name: 'Janick',
    type: 'cyan',
    histories: []
  },
  {
    id: '27',
    createdAt: '2020-10-29T15:02:46.911Z',
    name: 'Gunner',
    type: 'fuchsia',
    histories: []
  },
  {
    id: '28',
    createdAt: '2020-10-29T16:40:29.552Z',
    name: 'Whitney',
    type: 'lavender',
    histories: []
  },
  {
    id: '29',
    createdAt: '2020-10-29T12:16:47.188Z',
    name: 'Shanny',
    type: 'azure',
    histories: []
  },
  {
    id: '30',
    createdAt: '2020-10-30T07:58:52.791Z',
    name: 'teste 123',
    type: 'teste ',
    histories: []
  }
]

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const formRef = useRef<FormHandles>(null)

  const HandleSubmit: SubmitHandler = ({ ...data }, { reset }) => {
    const { email, password } = data
    try {
      setIsLoading(true)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <CustomDiv>
      <ContainerDiv>
        <ProfileImage />
        <Wellcome>Bem vindo: Db server</Wellcome>
        <Form ref={formRef} onSubmit={HandleSubmit}>
          <Input
            name="text"
            required
            type="email"
            placeholder="Buscar dragão"
          />
        </Form>
        <ConfigTame>
          <div>
            <h2>Dragoes capturados</h2>
          </div>
          <NavLink to="/new">
            <ImaIcon src={PlusCircle} alt="botão para adicionar mais dragoes" />
          </NavLink>
        </ConfigTame>
      </ContainerDiv>
    </CustomDiv>
  )
}

export default Home
