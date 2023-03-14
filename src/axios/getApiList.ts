import axios from 'axios'

export const getApiList = async () => {
  const { data } = await axios.get('http://localhost:3333')
  return data
}