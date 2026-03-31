import React from 'react';

const Highlights = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-[85px]'>
            <div className=' max-w-300 mx-auto flex justify-between  text-white py-[60px]'>
            <div>
                <h1 className='text-[60px] font-extrabold'>50K+</h1>
                <p className='text-2xl font-medium text-center'>Active Users</p>
            </div>
            <div className='border-r'></div>
            <div>
                <h1 className='text-[60px] font-extrabold'>200+</h1>
                <p className='text-2xl font-medium text-center'>Premium Tools</p>
            </div>
            <div className='border-r'></div>
            <div>
                <h1 className='text-[60px] font-extrabold'>4.9</h1>
                <p className='text-2xl font-medium text-center'>Rating</p>
            </div>
        </div>

        </div>

    );
};

export default Highlights;