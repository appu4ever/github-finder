import React, { useEffect, Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import githubContext from '../../context/github/githubContext'
import Spinner from '../layouts/Spinner'
import Repos from '../repos/Repos'


const User = ({ match }) => {

    const context = useContext(githubContext)
    useEffect(() => {
        context.getUser(match.params.login)
        context.getUserRepos(match.params.login)   
        //eslint-disable-next-line    
    }, [])

    const  {
        name,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
        company
    } = context.user

    if (context.loading) return <Spinner />
    return (
        <Fragment>
            <Link to ="/" className= "btn btn-light">Back to Search</Link>
            Hireable: {''}
            {
                hireable ? <i className= "fas fa-check text-success" /> : <i className= "fas fa-times-circle text-danger" />
            }
            <div className= "card grid-2">
                <div className= "all-center">
                    <img src= {avatar_url} alt= "" className= "round-img" style= {{width: '150px'}} />
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                </div>
                <div>
                    <Fragment>
                        {
                            bio && (
                                <Fragment>
                                    <p>{bio}</p>
                                </Fragment>
                            )
                        }
                        <a href= {html_url} className= "btn btn-dark my-1">Visit Github Profile</a>
                    </Fragment>
                    <ul>
                        <li>
                            {login && <Fragment><strong>Username: </strong>{login}</Fragment>}
                        </li>
                        <li>
                            {company && <Fragment><strong>Company: </strong>{company}</Fragment>}
                        </li>
                        <li>
                            {blog && <Fragment><strong>Website: </strong>{blog}</Fragment>}
                        </li>
                    </ul>
                </div>
            </div>
            <div className= "card text-center">
                <div className= "badge badge-primary">Followers: {followers}</div>
                <div className= "badge badge-success">Following: {following}</div>
                <div className= "badge badge-light">Public Repos: {public_repos}</div>
                <div className= "badge badge-dark">Public Gists: {public_gists}</div>
            </div>
            <Repos />
        </Fragment>
    )
}

export default User
