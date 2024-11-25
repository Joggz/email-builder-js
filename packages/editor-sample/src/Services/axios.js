import axios from 'axios'

// import { useUserStore } from '@/stores/userStore'§

export const unauthorized = axios.create()

export const authorized = axios.create()

authorized.interceptors.request.use(
  async (config) => {
    const userStore = useUserStore()
    // const token = userStore.getToken
    const token = localStorage.getItem('token')

    const headers = {
      Authorization: `bearer ${token}`,
      // 'Content-Type': 'application/json',
    }

    return {
      ...config,
      headers,
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

authorized.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // const userStore = useUserStore()

    if (error.response && error.response.status === 401) {
      userStore.LOGOUT()
    }
    return Promise.reject(error)
  }
)
