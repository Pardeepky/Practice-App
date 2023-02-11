import React from 'react'
import Card from '../UI/Card'
import './userTable.css'

const UserTable = ({ userData }) => {
    return (
        <Card className='users'>
            <ul>
                {userData.map((user) => (
                    <li key={user.id}>
                        {user.userName} ({user.age} years old) {user.collegeName}
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default UserTable