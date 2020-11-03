import React, { useEffect, useState } from 'react'
import { NameUser, Text, DflexBetween, DivMain, InitialText } from './style'

import ProfileImage from '../../shared/profile_Image'
import { useParams } from 'react-router-dom'
import { GetDragonDetail } from '../../services/DragonService'
import { formatDatePT } from '../../utils/functions'
import IDragonData from '../../interfaces/IDragonData'

interface Iparams {
  id: string
}

const DragonDetail: React.FC = () => {
  const [detail, setDetail] = useState<IDragonData>()
  const { id } = useParams<Iparams>()

  useEffect(() => {
    const loadDragonDetail = async () => {
      const response = await GetDragonDetail(id)
      setDetail(response)
    }
    loadDragonDetail()
  }, [id])

  if (!detail) return null

  return (
    <DivMain>
      <div>
        <ProfileImage />
        <NameUser>DB server</NameUser>
        <div>
          <NameUser>Detalhes do Dragão</NameUser>
          <DflexBetween>
            <Text>
              <strong>Nome: </strong> {detail.name}
            </Text>
            <Text>
              <strong>Tipo: </strong> {detail.type}
            </Text>
          </DflexBetween>
          <InitialText>
            <Text>
              <strong>Capturado: </strong>
              {formatDatePT(detail.createdAt)}
            </Text>
          </InitialText>
          <Text>
            <strong>História: </strong>{' '}
            {detail.histories.length > 0 ? (
              <span>{detail.histories.join('')}</span>
            ) : (
              <span> - </span>
            )}
          </Text>
        </div>
      </div>
    </DivMain>
  )
}

export default DragonDetail
