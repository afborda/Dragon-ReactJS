/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState } from 'react'
import { FormHandles, SubmitHandler } from '@unform/core'
import { Form } from '@unform/web'
import { NavLink } from 'react-router-dom'

import Input from '../../shared/customInput'
import ProfileImage from '../../shared/profile_Image'

import PlusCircle from '../../assets/icons/plus-circle.png'

import { DivHome, Wellcome, ImaIcon, ConfigTame, ContainerDiv } from './style'

//mock
import { mocksDragons } from '../../mocks/dragonMoks'
import ListDragon from '../listDragons'

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
    <DivHome>
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
        <ListDragon data={mocksDragons} />
      </ContainerDiv>
    </DivHome>
  )
}

export default Home
