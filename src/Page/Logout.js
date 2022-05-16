import React from 'react'
import { useDispatch } from 'react-redux'
import userSlice from '../store/user'
import { Navigate } from 'react-router-dom'

const Logout = () => {
    
    const dispatch = useDispatch()

    // Menghapus token dri LS
    localStorage.removeItem('minishopAccessToken')
    // Mengupdate user store jadi NULL
    dispatch( userSlice.actions.removeUser() )
  
    return (
        <Navigate to="/login" />
  )
}

export default Logout