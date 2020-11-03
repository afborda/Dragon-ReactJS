import React, { useRef, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import LocalStorageService from '../../services/LocalStorageService'

import ProfileImage from '../../shared/profile_Image'

import PlusCircle from '../../assets/icons/plus-circle.png'

import { DivHome, Wellcome, ImaIcon, ConfigTame, ContainerDiv } from './style'

import ListDragon from '../listDragons'

const Home: React.FC = () => {
  const [user, setUser] = useState('')

  useEffect(() => {
    const localStorageService = LocalStorageService()
    const { user } = localStorageService.GetToken()

    if (user) setUser(user)
  }, [])

  return (
    <DivHome>
      <ContainerDiv>
        <ProfileImage />
        <Wellcome>Bem vindo: {user}</Wellcome>

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
