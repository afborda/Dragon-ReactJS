import api from './axiosConfig'

interface Idragon {
  createdAt: string
  type: string
  histories: string[]
}

const AddDragonData = async (data: Idragon) => {
  console.log(data)
  await api.post(`dragon`, data)
}

export default AddDragonData
