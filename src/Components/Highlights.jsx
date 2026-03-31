import React from 'react';

const Highlights = () => {
    return (
        <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] mt-16">
            <div className="max-w-[1200px] mx-auto px-4 py-10 text-white">

                <div className="grid grid-cols-1 sm:grid-cols-3 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/30">

                    {/* Item 1 */}
                    <div className="py-6">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
                            50K+
                        </h1>
                        <p className="text-lg sm:text-xl mt-2">Active Users</p>
                    </div>

                    {/* Item 2 */}
                    <div className="py-6">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
                            200+
                        </h1>
                        <p className="text-lg sm:text-xl mt-2">Premium Tools</p>
                    </div>

                    {/* Item 3 */}
                    <div className="py-6">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
                            4.9
                        </h1>
                        <p className="text-lg sm:text-xl mt-2">Rating</p>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default Highlights;