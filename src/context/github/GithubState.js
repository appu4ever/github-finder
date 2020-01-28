import React, { useReducer } from 'react'
import axios from 'axios'
import githubContext from './githubContext'
import githubReducer from './githubReducer'
import {
    SET_LOADING,
    GET_REPOS,
    GET_USER,
    SEARCH_USERS,
    CLEAR_USERS
} from '../types'

let githubClientId
let githubClientSecret

if (process.env.NODE_ENV !== 'production') {
    githubClientId= process.env.REACT_APP_GITHUB_CLIENT_ID
    githubClientSecret= process.env.REACT_APP_GITHUB_CLIENT_SECRET
} else {
    githubClientId= process.env.GITHUB_CLIENT_ID
    githubClientSecret= process.env.GITHUB_CLIENT_SECRET    
}

const GithubState = (props) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    //Search users
    const searchUsers = async (value) => {
        setLoading()
        const res= await axios.get(`https://api.github.com/search/users?q=${value}&client_id=${githubClientId}&client_secret=${githubClientSecret}`)
        dispatch({type: SEARCH_USERS, payload: res.data.items})
    }
    //Get user
    const getUser = async (username) => {
        setLoading()
        const res= await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`)
        dispatch({type: GET_USER, payload: res.data})
    }
    //Get repos
    const getUserRepos = async (username) => {
        setLoading()
        const res= await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`)
        dispatch({type: GET_REPOS, payload: res.data})
    }
    //Clear users
    const clearUsers = () => {
        dispatch({type: CLEAR_USERS})
    }
    //Set loading
    const setLoading = () => dispatch({type: SET_LOADING})
    return (
        <githubContext.Provider value = {{
            user: state.user,
            users: state.users,
            repos: state.repos,
            loading: state.loading,
            searchUsers,
            clearUsers,
            getUser,
            getUserRepos
        }}>
            {props.children}
        </githubContext.Provider>
    )
}

export default GithubState
