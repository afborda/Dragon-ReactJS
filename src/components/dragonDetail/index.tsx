import React, { useEffect, useState } from 'react'
import { NameUser, Text, DflexBetween, DivMain, InitialText } from './style'

import ProfileImage from '../../shared/profile_Image'
import { useParams } from 'react-router-dom'
import { GetDragonDetail } from '../../service/externalApi'
import { formatDate } from '../../utils/functions'

interface Iparams {
  id: string
}

interface IDragonData {
  id: string
  createdAt: string
  name: string
  type: string
  histories: string[]
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
  }, [])

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
              {formatDate(detail.createdAt)}
            </Text>
          </InitialText>
          <Text>
            <strong>História: </strong>{' '}
            {detail.histories.length > 0 ? (
              <p>{detail.histories[1]}</p>
            ) : (
              <p>-</p>
            )}
          </Text>
        </div>
      </div>
    </DivMain>
  )
}

export default DragonDetail
