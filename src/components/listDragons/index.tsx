/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { ListDragons, ImaIcon } from './style'
import { NavLink } from 'react-router-dom'
import DeleteIcon from '../../assets/icons/delete.png'
import EditIcon from '../../assets/icons/edit.png'
import DetailIcon from '../../assets/icons/detail.png'
import { firstCapitalLetter, formatDate } from '../../utils/functions'

interface IDragonData {
  data: {
    id: string
    createdAt: string
    name: string
    type: string
    histories: string[]
  }[]
}

const ListDragon: React.FC<IDragonData> = (data: IDragonData) => {
  const orderedList = data.data.sort((a: any, b: any) => {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
  })

  return (
    <>
      {orderedList.map(({ id, name, createdAt, type }) => (
        <ListDragons key={id}>
          <div>
            <p>Nome: {firstCapitalLetter(name)}</p>
            <div>
              <NavLink to={'/'}>
                <ImaIcon
                  src={EditIcon}
                  alt="botão para adicionar mais dragoes"
                />
              </NavLink>
              <NavLink to="/detail">
                <ImaIcon
                  src={DetailIcon}
                  alt="botão para adicionar mais dragoes"
                />
              </NavLink>
              <NavLink to="/">
                <ImaIcon
                  src={DeleteIcon}
                  alt="botão para adicionar mais dragoes"
                />
              </NavLink>
            </div>
          </div>
          <div>
            <p>Tipo: {firstCapitalLetter(type)}</p>
            <p>Data: {formatDate(createdAt)}</p>
          </div>
        </ListDragons>
      ))}
    </>
  )
}

export default ListDragon
