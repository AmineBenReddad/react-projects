import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    const user = useContext(UserContext)
  return (
    <div>
        <h1>Hello {user}</h1>
        <h2>Your Dashboard</h2>
        <div>
            <Link to="/">Go back Home</Link>
        </div>
    </div>
  )
}

export default Dashboard