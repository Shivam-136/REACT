import React, { useContext } from 'react'
import { Auth } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router'

const PublicRoutes = () => {
    let {loggedInUser} = useContext(Auth)

    if(loggedInUser){
        return <Navigate to={'/'}/>
    }
    return <Outlet/>
}

export default PublicRoutes
