import React, { useContext } from 'react'
import AlertContext from '../../context/alert/alertContext'
const Alert = () => {
    const context = useContext(AlertContext)
    return (
        context.alert !== null && (
            <div className= {`alert alert-${context.alert.type}`}>
                <i className= "fas fa-info-circle">  {context.alert.msg}</i>
            </div>
        )

    )
}

export default Alert