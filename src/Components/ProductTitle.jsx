import React from 'react';

const ProductTitle = ({setProductType, ProductType, carts}) => {
    return (
        <div className='max-w-300 mx-auto my-28'>
            <div className='text-center space-y-4'>
                    <h1 className='text-[#101727] text-5xl font-extrabold'>Premium Digital Tools</h1>
                    <p className='text-[#627382] text-[16px]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>


                    <div className='mb-10'>
                    <button onClick={()=>setProductType('products')} className={`${ProductType === 'products' ? '  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white': 'bg-transparent' } btn border-[#F6F6F6] border-r-0 rounded-full`} >Products</button>


                    <button onClick={()=> setProductType('cart')} className={`btn ${
                        ProductType === 'cart' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : 'bg-transparent'
                    } rounded-full border-[#F6F6F6] border-l-0`}>Cart ({carts.length})</button>  
                    </div>
                </div>
        </div>
    );
};

export default ProductTitle;