import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { id } = useParams();
    return (
        <div className='text-center h-screen w-screen flex items-center justify-center '>User:{id}</div>
    )
}

export default User