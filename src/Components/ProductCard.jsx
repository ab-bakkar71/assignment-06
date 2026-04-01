import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';

const ProductCard = ({ products, setCarts, carts }) => {
    
    const[isBuy, setIsBuy]= useState(false)
    const handelBuyNow =() => {
        setIsBuy(true);
    const isFound = carts.find(item => item.id === products.id);

    if(isFound){
        toast.error('Product already in cart!')
        return
    }
    setCarts([...carts, products])
    toast.success('Product added Successful!')

    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-sm">
                <div className="card-body relative">
                    <span className={`
                        ${products.status === 'new' ? 'bg-green-200 text-green-500': products.status === 'popular' ? 'bg-purple-200 text-purple-500': 'bg-amber-100 text-amber-500'
                            
                            }
                        absolute top-3 right-3 px-3 py-1 rounded-full text-[16px]`}>{products.status}</span>
                    <div>
                        <div className="w-16 h-16 rounded-full border border-[#F2F2F2] p-3 overflow-hidden">
                            <img
                                src={products.image}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-3xl font-bold">{products.title}</h2>
                        <p>{products.description}</p>
                        <span className="text-xl">${products.price} / {products.period}</span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        {
                            products.features.map((feature, index)=>
                            <li key={index}
                            className='flex items-center gap-2 font-medium text-[#627382] text-[16px]'><FaCheck className='text-[#30B868]' /> {feature}</li>
                            )
                        }
                    </ul>
                    <div className="mt-6">
                        <button onClick={handelBuyNow} className={`${isBuy ? "btn btn-success btn-block" : "btn btn-primary btn-block"}`}>{isBuy ? ' Added to cart!' : 'Buy Now'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;