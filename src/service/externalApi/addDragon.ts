import api from './axiosConfig'

interface Idragon {
  createdAt: string
  type: string
  histories: string[]
}

const AddDragonData = async (data: Idragon) => {
  const { createdAt, type, histories } = data
  const dragon = await api.post(`dragon`, {
    createdAt,
    type,
    histories: ['Aqui tem uma Historia!']
  })
}

export default AddDragonData
