import React from 'react'

import { CustomImg } from './style'
import ProfileImg from '../../assets/img/img_user.png'

const ProfileImage: React.FC = () => {
  return (
    <>
      <div>
        <CustomImg src={ProfileImg} alt="Image de perfil do usuario" />
      </div>
    </>
  )
}

export default ProfileImage
