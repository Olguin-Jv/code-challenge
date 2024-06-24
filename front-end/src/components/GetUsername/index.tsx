import React, { useState } from 'react'
import { useFetchUser } from '../../hooks/useFetchUser'

const GetUsername: React.FC = () => {
  const [fetchEnabled, setFetchEnabled] = useState<boolean>(false)
  const { data: user, error, isLoading } = useFetchUser(fetchEnabled);

  const handleFetchUser = () => setFetchEnabled(true)

  return (
    <div>
      <button onClick={handleFetchUser}>Get Username</button>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching users</p>}
      {user && <div>Username: {user.name}</div>}
    </div>
  )
}

export default GetUsername