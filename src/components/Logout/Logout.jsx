import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import loginContext from '../context/loginContext'

export default function Logout() {
    const context = useContext(loginContext)
    const history = useHistory()
    context.log()
    history.push('/')
    return (
        <div>
            
        </div>
    )
}
