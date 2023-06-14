import axios from 'axios'

const host = window.location.hostname === 'localhost' ? 'http://34.64.142.115' : 'api';

export const apiClient = axios.create({
  baseURL: host,
});

export default async function getAsync(url, config) {
  try {
    const res = await apiClient(url, config)
    // console.log(res)
    return res.data
  } catch (err) {
    // console.log(err)
    throw new Error(err)
  }
}