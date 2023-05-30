import axios from 'axios'

export default async function getAsync(config) {
  try {
    const res = await axios(config)
    return res.data
  } catch(err) {
    console.log(err)
    throw new Error(err)
  }
}
