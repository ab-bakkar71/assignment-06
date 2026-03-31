import React from 'react';
import hero from '../assets/banner.png'
import badge from '../assets/badge.png'
import { CiPlay1 } from 'react-icons/ci';

const Hero = () => {
    return (
        <div className="hero pt-15">
            <div className="hero-content inline-flex flex-col lg:flex-row-reverse gap-20">
                <img
                    src={hero}
                    className="max-w-sm rounded-lg"
                />
                <div>
                    <div className="inline-flex items-center px-4 py-2 bg-indigo-50 rounded-full ">
                        <span className="flex h-4 w-4 mr-2">
                            <img className='' src={badge} />
                        </span>

                        <span className="text-indigo-700 font-medium text-sm">
                            New: AI-Powered Tools Available
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-6xl text-[#101727] font-bold">Supercharge Your <br />Digital Workflow</h1>
                    <p className="py-6">
                        Access premium AI tools, design assets, templates, and productivity <br />
                        software—all in one place. Start creating faster today. <br />
                        Explore Products
                    </p>
                    <div>
                        <button className="btn btn-primary bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none text-white rounded-full mr-4">Explore Products</button>
                        <button className="group relative p-[1.5px] rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] cursor-pointer">
                            <div className="flex items-center gap-2 px-6 py-2 rounded-full bg-white transition-all">
                                <CiPlay1 className="text-[#4F39F6 text-xl" />
                                <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-semibold ">
                                    Watch Demo
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;