import api from './axiosConfig'

const DeleteDragon = async (id: string) => {
  const dragon = await api.delete(`dragon/${id}`)

  return dragon
}

export default DeleteDragon
