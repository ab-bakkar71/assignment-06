import React from 'react';

const Workflow = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-center text-white space-y-4 py-30'>
            <h1 className='text-[40px] font-extrabold'>Ready to Transform Your Workflow?</h1>
            <p className='text-md opacity-90'>Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.</p>

            <div className='mt-9'>
                <button className='btn rounded-full mr-4 hover:bg-transparent text-black'>
                    <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-semibold hover:text-white">
                        Explore Products
                    </span></button>
                <button className="btn rounded-full border border-white bg-transparent text-white hover:bg-white transition group">
                    <span className="group-hover:bg-linear-to-r group-hover:from-[#4F39F6] group-hover:to-[#9514FA] group-hover:bg-clip-text group-hover:text-transparent">
                        View Pricing
                    </span>
                </button>

            </div>
            <span className='text-md opacity-90'>14-day free trial • No credit card required • Cancel anytime</span>
        </div>
    );
};

export default Workflow;