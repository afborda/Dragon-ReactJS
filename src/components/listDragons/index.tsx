import React from 'react'
import { ListDragons, ImaIcon } from './style'
import { NavLink } from 'react-router-dom'
import DeleteIcon from '../../assets/icons/delete.png'
import EditIcon from '../../assets/icons/edit.png'
import DetailIcon from '../../assets/icons/detail.png'

interface IDragonData {
  data: {
    id: string
    createdAt: string
    name: string
    type: string
  }
}

const ListDragon: React.FC<IDragonData> = () => {
  return (
    <ListDragons>
      <div>
        <p>Nome:juju</p>
        <div>
          <NavLink to="/login">
            <ImaIcon src={EditIcon} alt="botão para adicionar mais dragoes" />
          </NavLink>
          <NavLink to="/login">
            <ImaIcon src={DetailIcon} alt="botão para adicionar mais dragoes" />
          </NavLink>
          <NavLink to="/login">
            <ImaIcon src={DeleteIcon} alt="botão para adicionar mais dragoes" />
          </NavLink>
        </div>
      </div>
      <div>
        <p>Tipo: Agua</p>
        <p>Data: 10/05/20120</p>
      </div>
    </ListDragons>
  )
}

export default ListDragon
