import axios from 'axios'

export default async function getAsync(url, config) {
  try {
    const res = await axios(url, config)
    // console.log(res)
    return res.data
  } catch (err) {
    // console.log(err)
    throw new Error(err)
  }
}