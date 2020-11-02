/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { ListDragons, ImaIcon } from './style'
import { NavLink } from 'react-router-dom'
import DeleteIcon from '../../assets/icons/delete.png'
import EditIcon from '../../assets/icons/edit.png'
import DetailIcon from '../../assets/icons/detail.png'
import {
  firstCapitalLetter,
  formatDatePT,
  orderByObject
} from '../../utils/functions'
import { DeleteDragon, getDragon } from '../../service/externalApi'

interface IDragonData {
  id: string
  createdAt: string
  name: string
  type: string
  histories: string[]
}

const ListDragon: React.FC = () => {
  const [listDragon, setListDragon] = useState<IDragonData[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const loadDragon = async () => {
      const response = await getDragon()
      if (loading) {
        setListDragon(response)
      }
      setLoading(false)
    }

    loadDragon()
  }, [loading])

  const deleteDragon = async (id: string) => {
    const dragon = await DeleteDragon(id)
    setLoading(true)
  }

  if (!listDragon) return null

  return (
    <>
      {orderByObject(listDragon).map(({ id, name, createdAt, type }) => (
        <ListDragons key={id}>
          <div>
            <p>Nome: {firstCapitalLetter(name)}</p>
            <div>
              <NavLink to={'/edit/' + id}>
                <ImaIcon src={EditIcon} alt="botão para editar  dragoes" />
              </NavLink>
              <NavLink to={'/detail/' + id}>
                <ImaIcon
                  src={DetailIcon}
                  alt="botão para ver detales de dragão"
                />
              </NavLink>
              <NavLink onClick={() => deleteDragon(id)} to="/">
                <ImaIcon src={DeleteIcon} alt="botão para deletar dragão" />
              </NavLink>
            </div>
          </div>
          <div>
            <p>Tipo: {firstCapitalLetter(type)}</p>
            <p>Data: {formatDatePT(createdAt)}</p>
          </div>
        </ListDragons>
      ))}
    </>
  )
}

export default ListDragon
