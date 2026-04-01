import React from 'react';
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-30">
            <div className='max-w-300 mx-auto px-6 '>
                <div className="footer sm:footer-horizontal p-10">
                    <aside>
                        <h1 className='text-5xl font-bold'>DigiTools</h1>
                        <p>
                            Digital Premium Tools.
                            <br />
                            Providing reliable tech since 2026
                        </p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Product</h6>
                        <a className="link link-hover">Features</a>
                        <a className="link link-hover">Pricing</a>
                        <a className="link link-hover">Templates</a>
                        <a className="link link-hover">Integrations</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Blog</a>
                        <a className="link link-hover">Careers</a>
                        <a className="link link-hover">Press</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Resources</h6>
                        <a className="link link-hover">Documentation</a>
                        <a className="link link-hover">Help Center</a>
                        <a className="link link-hover">Community</a>
                        <a className="link link-hover">Contact</a>
                    </nav>

                    <nav>
                        <h6 className="footer-title">Social</h6>
                        <div className='grid grid-flow-col gap-3 text-2xl'>
                            <a className="link link-hover"><FaFacebook /></a>
                            <a className="link link-hover"><FaInstagramSquare /></a>
                            <a className="link link-hover"><FaXTwitter /></a>
                        </div>
                    </nav>
                </div>
<hr className='pb-6 border-gray-200 mt-12'/>
                <div className='flex flex-col md:flex-row justify-between items-center gap-4 pb-6 text-sm text-gray-400'>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                    <nav className='flex gap-7'>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>

                </div>
            </div>
        </footer>

    );
};

export default Footer;