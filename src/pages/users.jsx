import React from 'react'
import { Link } from 'react-router-dom'

const UserPage = () => {
    return(
        <div>
            <ul>
                {["Warren", "Mina", "Jigar"].map((user, idx) => {
                    return <li key={idx}>{user}</li>
                })}
            </ul>
            <span><Link to="/">Home</Link></span>
        </div>
    )
}

export default UserPage