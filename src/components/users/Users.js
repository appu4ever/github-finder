import React, { useContext } from 'react'
import githubContext from '../../context/github/githubContext'
import UserItems from './UserItems'
import Spinner from '../layouts/Spinner'

const Users = () => {
    const context = useContext(githubContext)
    if (context.loading) {
        return <Spinner />
    } else {
        return (
            <div style= {userStyles}>
                {
                    context.users.map(user => {
                        return <UserItems key= {user.id} user= {user} />
                    }) 
                }
            </div>
        )
    }

}

const userStyles= {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
