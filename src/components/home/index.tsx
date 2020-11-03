import React from 'react'
import { NavLink } from 'react-router-dom'
import { useUserAuth } from '../../context/AuthProvider'

import ProfileImage from '../../shared/profile_Image'
import PlusCircle from '../../assets/icons/plus-circle.png'

import { DivHome, Wellcome, ImaIcon, ConfigTame, ContainerDiv } from './style'

import ListDragon from '../listDragons'

const Home: React.FC = () => {
  const { userAuth } = useUserAuth()

  console.log(userAuth)

  return (
    <DivHome>
      <ContainerDiv>
        <ProfileImage />
        <Wellcome>Bem vindo {userAuth?.name}</Wellcome>

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
