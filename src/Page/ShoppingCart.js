import React from 'react'
import { useSelector } from 'react-redux'

const ShoppingCart = () => {
    
    const cart = useSelector( store => store.cart )

    return (
        <section>
            <div className='container'>
                <h1 className='text-4xl font-bold text-center mb-8'>Shopping Cart</h1>
                { cart.length <= 0 && <h4 className='text-xl font-bold text-center'>No items in your cart.</h4>}
                { cart.length > 0 && 
                    <>
                        <ul className='border-t border-solid border-gray-300 mb-8'>
                            {cart.map( (item, index) => {
                                return(
                                    <li className='border-b border-solid border-gray-300 py-3' key={index}>
                                        <div className='flex justify-between items-center'>
                                            <div classname='mr-8'>
                                                <h5 classname='font-bold'>{item.title}</h5>
                                            </div>
                                            <div className='flex space-x-8 items-end'>
                                                <div>
                                                    <p classname='text-xs'>Item price</p>
                                                    <p className='text-md'>$ {item.price}</p>
                                                </div>
                                                <div>
                                                    <p classname='text-xs'>Item qty</p>
                                                    <p className='text-md'>{item.count}</p>
                                                </div>
                                                <div>
                                                    <p classname='text-xs'>Subtotal</p>
                                                    <p className='text-md'>$ {item.price * item.count}</p>
                                                </div>
                                                <div>
                                                    <button className='text-red-500'>Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className='flex justify-end'>
                            <div classname='text-3xl font-bold'>
                                TOTAL: $ { cart.reduce( (total, item) => total + ( item.price * item.count ), 0)}
                            </div>
                        </div>
                    </>
                }
            </div>
        </section>
    )
}

export default ShoppingCart