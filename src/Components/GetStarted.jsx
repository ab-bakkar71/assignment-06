import User from '../assets/user.png';
import Rocket from '../assets/rocket.png';
import Package from '../assets/package.png';

const GetStarted = () => {
    return (
        <div className='bg-slate-50 py-30'>
            <div className=' max-w-300 mx-auto w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 '>
                <div className='relative flex flex-col justify-center items-center bg-white p-6 py-15 rounded-md shadow space-y-4 text-center'>
                    <div className='bg-purple-100 p-5 rounded-full'>
                        <img src={User} alt="User Icon" />
                    </div>
                    <h3 className='text-gray-900 text-2xl font-bold'>Create Account</h3>
                    <p className='text-slate-500 font-[16px]'>Sign up for free in seconds. No credit card required to get started.</p>
                    <div className='absolute top-5 right-5 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-[14px] w-8 h-8 flex items-center justify-center rounded-full'>
                        01
                    </div>
                </div>
                <div className='relative flex flex-col justify-center items-center bg-white p-6 py-15 rounded-md shadow space-y-4 text-center'>
                    <div className='bg-purple-100 p-5 rounded-full'>
                        <img src={Package} alt="User Icon" />
                    </div>
                    <h3 className='text-gray-900 text-2xl font-bold'>Choose Products</h3>
                    <p className='text-slate-500 font-[16px]'>Browse our catalog and select the tools that fit your needs.</p>
                    <div className='absolute top-5 right-5 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-[14px] w-8 h-8 flex items-center justify-center rounded-full'>
                        02
                    </div>
                </div>
                <div className='relative flex flex-col justify-center items-center bg-white p-6 py-15 rounded-md shadow space-y-4 text-center'>
                    <div className='bg-purple-100 p-5 rounded-full'>
                        <img src={Rocket} alt="User Icon" />
                    </div>
                    <h3 className='text-gray-900 text-2xl font-bold'>Start Creating</h3>
                    <p className='text-slate-500 font-[16px]'>Download and start using your premium tools immediately.</p>
                    <div className='absolute top-5 right-5 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-[14px] w-8 h-8 flex items-center justify-center rounded-full'>
                        03
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;