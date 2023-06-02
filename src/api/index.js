import axios from 'axios'

// export default async function getAsync(url, config) {
//   try {
//     const res = await fetch(url, config)
//     res.json().then(data => console.log(data))
//     return res.data
//   } catch (err) {
//     console.log(url, config)
//     console.log(err)
//     throw new Error(err)
//   }
// }

export default async function getAsync(url, config) {
  try {
    const res = await axios(url, config)
    console.log(res)
    return res.data
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
}