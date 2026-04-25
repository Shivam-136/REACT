import React, { useContext } from 'react'
import { Auth } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router'

const ProctedRoute = () => {
     let {loggedInUser} = useContext(Auth)

    if(!loggedInUser){
        return <Navigate to={'/auth'}/>
    }
    return <Outlet/>
}


export default ProctedRoute
