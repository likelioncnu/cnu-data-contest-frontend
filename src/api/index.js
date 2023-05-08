import axios from 'axios'

export default async function getAsync(url, config) {
  const response = await axios(url, config)
  return response.data
}
