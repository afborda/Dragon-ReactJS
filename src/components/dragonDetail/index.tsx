import React from 'react'
import { NameUser, Text, DflexBetween, DivMain, InitialText } from './style'

import ProfileImage from '../../shared/profile_Image'
const DragonDetail: React.FC = () => {
  return (
    <DivMain>
      <div>
        <ProfileImage />
        <NameUser>Mostra o abner</NameUser>
        <div>
          <NameUser>Detalhes do Dragão</NameUser>
          <DflexBetween>
            <Text>
              <strong>Nome: </strong> Abner
            </Text>
            <Text>
              <strong>Tipo: </strong> Terra
            </Text>
          </DflexBetween>
          <InitialText>
            <Text>
              <strong>Capturado: </strong>20/10/2020
            </Text>
          </InitialText>
          <Text>
            <strong>História: </strong> Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eum totam assumenda quod numquam! Vero, doloremque
            aut pariatur sunt voluptatem deserunt inventore eos accusantium
            soluta. Dolorem nihil cupiditate aut nisi sequi!
          </Text>
        </div>
      </div>
    </DivMain>
  )
}

export default DragonDetail
