import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'

const Recommendations = () => {
    const user = useContext(UserContext)
  return (
    <div>
        <h1>Hello {user}</h1>
        <h2>Your Recommendations</h2>
        <div>
        <Link to="/">Go back Home</Link>
        </div>
    </div>
  )
}

export default Recommendations