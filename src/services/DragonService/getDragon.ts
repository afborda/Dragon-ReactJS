import api from './axiosConfig'

const GetDragon = async () => {
  const dragon = await api.get('dragon')

  return dragon.data
}

export default GetDragon
