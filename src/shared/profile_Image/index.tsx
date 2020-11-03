import React from 'react'

import { CustomImg } from './style'
import ProfileImg from '../../assets/img/img_user.png'

import LocalStorageService from '../../services/LocalStorageService'

const ProfileImage: React.FC = () => {
  const localStorageService = LocalStorageService()

  const HandleLogOut = () => {
    localStorageService.ClearToken()
  }

  return (
    <>
      <div>
        <a onClick={() => HandleLogOut()}>LogOut</a>
        <CustomImg src={ProfileImg} alt="Image de perfil do usuario" />
      </div>
    </>
  )
}

export default ProfileImage
