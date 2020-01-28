import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const UserItems = ({user: { avatar_url, html_url,login }}) => {
    return (
        <div className= "text-center card">
            <img src= {avatar_url} alt= "" className= "round-img"
                style= {{width: '60px'}} />
            <h3>{login}</h3>
            <div>
                <Link to= {`/user/${login}`} className= "btn-dark btn-sm my-1">More</Link>
            </div>
        </div>
    )
}

UserItems.propTypes= {
    user: PropTypes.object.isRequired
}

export default UserItems
