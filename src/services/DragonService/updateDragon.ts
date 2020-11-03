import api from './axiosConfig'

interface Idragon {
  name: string
  createdAt: string
  type: string
}

const updateDragon = async (id: string, data: Idragon) => {
  const { name, createdAt, type } = data
  await api.put(`dragon/${id}`, { name, createdAt, type })
}

export default updateDragon
