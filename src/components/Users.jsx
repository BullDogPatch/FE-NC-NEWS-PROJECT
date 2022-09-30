import { useState, useEffect } from 'react'
import { getUsers } from '../utils/api'
import SingleUser from './SingleUser'

function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    getUsers().then(({ users }) => {
      setUsers(users)
    })
  }, [])

  return (
    <>
      Users
      <h1>Members Page</h1>
      <div>
        {users?.map(user => (
          <SingleUser key={user.username} user={user} />
        ))}
      </div>
    </>
  )
}

export default Users
