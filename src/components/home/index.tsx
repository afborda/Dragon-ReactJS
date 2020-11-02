/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState } from 'react'
import { FormHandles, SubmitHandler } from '@unform/core'
import { Form } from '@unform/web'
import { NavLink } from 'react-router-dom'

import Input from '../../shared/customInput'
import ProfileImage from '../../shared/profile_Image'

import PlusCircle from '../../assets/icons/plus-circle.png'

import { DivHome, Wellcome, ImaIcon, ConfigTame, ContainerDiv } from './style'

import ListDragon from '../listDragons'

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  return (
    <DivHome>
      <ContainerDiv>
        <ProfileImage />
        <Wellcome>Bem vindo: Db server</Wellcome>

        <ConfigTame>
          <div>
            <h2>Dragoes capturados</h2>
          </div>
          <NavLink to="/new">
            <ImaIcon src={PlusCircle} alt="botão para adicionar mais dragoes" />
          </NavLink>
        </ConfigTame>
        <ListDragon />
      </ContainerDiv>
    </DivHome>
  )
}

export default Home
