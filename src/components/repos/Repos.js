import React, { useContext } from 'react'
import githubContext from '../../context/github/githubContext'
import RepoItem from './RepoItem'

const Repos = () => {
    const context = useContext(githubContext)
    console.log(context.repos)
    return (
        context.repos.map(repo => <RepoItem repo= {repo} key= {repo.id} />)
    )
}

export default Repos
