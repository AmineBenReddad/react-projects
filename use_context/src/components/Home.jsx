import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'

const Home = () => {
    const [user, setUser] = useContext(UserContext)
    const [edit, setEdit] = useState(false)
    const [name, setName] = useState('')

    const changeName = (event) => {
        if (event.key === 'Enter') {
            setUser(name)
            setEdit(false)
            setName('')
        }
    }
    
  return (
    <div className='flex flex-row justify-between w-full items-start'>
        <div className='flex flex-col items-center gap-6'>
            <h1>{user}'s Home</h1>
            <input 
                className={`border rounded-lg p-2 ${edit ? "flex" : "hidden"}`}
                placeholder='Enter your new name'
                onChange={(e) => setName(e.target.value)}
                onKeyDown={changeName}
                value={name}
                type="text" 
            />
            <div className={`${edit ? "hidden" : "flex"}`}>
                <button 
                    className='p-3 bg-slate-500 text-white rounded-lg'
                    onClick={() => setEdit(true)}
                >
                    Edit your name
                </button>
            </div>
            <div className={`flex gap-2 ${edit ? "flex" : "hidden"}`}>
                <button 
                    className='p-3 bg-green-700 rounded-lg text-white'
                    onClick={() => {
                        setUser(name)
                        setEdit(false)
                        setName('')
                    }}
                >
                    Edit
                </button>
                <button 
                    className='p-3 bg-red-700 rounded-lg text-white'
                    onClick={() => setEdit(false)}
                >
                    Cancel
                </button>
            </div>
        </div>
        <div className='flex'>
            <Link to="/dashboard">Your Dashboard</Link>
            <Link className='ml-4' to="/recommendations">Recommendations</Link>
            <Link className='ml-4' to="/podcasts">Podcasts</Link>
        </div>
    </div>
  )
}

export default Home