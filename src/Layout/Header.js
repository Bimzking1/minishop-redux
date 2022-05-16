import React, { useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Logo from '../Component/Bimoshop2.ico'

const Header = () => {

    const user = useSelector( store => store.user.data)

    return (
        <div className="bg-green-700 text-white" >
            <div className="container py-6">
                <div className="flex justify-between items-center">
                    <Link to="/">
                        <div className='flex'>
                            <img src={Logo} width={40}/>
                            <h2 className='px-4 text-4xl font-extrabold'>Bimo's Minishop</h2>
                        </div>
                    </Link>
                    <div>
                        <ul className="flex space-x-4">
                            {/* ALL */}
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/shopping-cart">Cart</Link></li>
                            {/* PUBLIC ONLY */}
                            { user === null && <li><Link to="/login">Login</Link></li>}
                            {/* PROTECTED */}
                            { user !== null && <li><Link to="/order-history">My Order</Link></li> }
                            { user !== null && <li><Link to="/logout">Logout</Link></li> }
                        </ul>
                        { user !== null && <div>{ user.email }</div>  }
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Header