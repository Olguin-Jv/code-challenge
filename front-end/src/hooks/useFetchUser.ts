// src/hooks/useFetchUsers.ts
import { useQuery, UseQueryResult } from 'react-query'

interface User {
  name: string
}

type FetchUser = () => Promise<User>
type UseFetchUser = (enabled: boolean) => UseQueryResult<User, Error>

const fetchUser: FetchUser = async () => {
  const response = await fetch('/api/user')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

export const useFetchUser: UseFetchUser = (enabled = false) => {
  return useQuery('users', fetchUser, { enabled })
}