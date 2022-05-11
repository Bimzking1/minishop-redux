import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Component/Bimoshop2.ico'

const Header = () => {
  return (
    <div className='bg-green-700 text-white'>
        <div className='container py-6'>
            <div className='flex justify-between items-center'>
                <Link to="/">
                    <div className='flex'>
                        <img src={Logo} width={40}/>
                        <h2 className='px-4 text-4xl font-extrabold'>Bimo's Minishop</h2>
                    </div>
                </Link>
                <div>
                    <ul className='flex space-x-4'>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/shopping-cart">Cart</Link></li>
                        <li><Link to="/order-history">My Order</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header