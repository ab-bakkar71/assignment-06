import React from 'react';
import { BsCartPlus } from 'react-icons/bs';
import { toast } from 'react-toastify';


const Cart = ({ carts, setCarts }) => {

    const handelProceed = () => {
        setCarts([]);
        toast.success('Payment Successful!')
    };

    const handelDelete = (cart) => {
       const deleteArray = carts.filter((product)=> product.id !== cart.id);
       setCarts(deleteArray)

       toast.error('Item Deleted!')
    } 
 
    const totalPrice = carts.reduce((sum, product) => sum + product.price,0)

    return (
        <div className='max-w-300 mx-auto my-28 space-y-4 border border-[#F2F2F2] shadow-sm p-10'>
            <h1 className='text-gray-900 text-2xl font-bold'>Your Cart</h1>
            {
                carts.length === 0 ? (
                    <div className='text-center'>
                        <div className='flex justify-center items-center text-8xl opacity-60'>
                            <BsCartPlus />
                        </div>
                        <p className=" font-bold text-2xl p-5">Cart Is Empty</p>
                    </div>) : (
                    <>
                        {
                            carts.map((cart) => <div key={cart.id}>
                                <ul className="list bg-base-100 rounded-box shadow-md">
                                    <li className="list-row">
                                        <div><img className="size-10 rounded-box" src={cart.image} /></div>
                                        <div>
                                            <div className='text-gray-900 font-bold text[20px]'>{cart.title}</div>
                                            <div className="text-xs uppercase font-semibold opacity-60">${cart.price}</div>
                                        </div>
                                        <button onClick={() => handelDelete(cart)}
                                         className="btn btn-outline btn-secondary text-[#FF3980] cursor-pointer hover:text-white border-0">
                                            Remove
                                        </button>
                                    </li>
                                </ul>
                            </div>)}
                        <div className='flex justify-between'>
                            <p>Total:</p>
                            <span className='text-gray-900 text-2xl font-bold'>${totalPrice}</span>
                        </div>
                        <div>
                            <button onClick={handelProceed} className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn w-full text-white rounded-full'>Proceed to Checkout</button>
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default Cart;