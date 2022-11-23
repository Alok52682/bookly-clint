import React from 'react';
import { FaInbox, FaPhone, FaFacebookF, FaTwitter, FaInstagram, FaSkype } from 'react-icons/fa';

const Footer = () => {

    return (
        <div className="py-16 text-white bg-slate-900">
            <div className="grid lg:grid-cols-4 w-9/12 mx-auto">
                <div className='text-xl'>
                    <div to='/' className="font-extrabold normal-case text-5xl flex items-center">
                        <h2 className='text-red-600'>BookLy</h2>
                    </div>
                    <h2 className='text-3xl hover:text-red-600'>Caribbean Ct.</h2>
                    <h4 className='mb-5 hover:text-red-600'>Haymarket, Virginia (VA).</h4>
                    <h4 className=' hover:text-red-600'><FaInbox className='inline mr-2 text-red-600' /><span>bookly@gmail.com</span></h4>
                    <h4 className='mb-5 hover:text-red-600'><FaPhone className='inline mr-2 text-red-600' /><span>(970) 262-1413</span></h4>

                </div>
                <div className='text-xl' style={{ lineHeight: '40px' }}>
                    <h2 className='text-2xl text-red-600 font-bold mb-5'>Help</h2>
                    <h4 className=' hover:text-red-600'>Search</h4>
                    <h4 className=' hover:text-red-600'>Help</h4>
                    <h4 className=' hover:text-red-600'>Information</h4>
                    <h4 className=' hover:text-red-600'>Shopping information</h4>
                </div>
                <div className='text-xl' style={{ lineHeight: '40px' }}>
                    <h2 className='text-2xl text-red-600 font-bold mb-5'>Support</h2>
                    <h4 className=' hover:text-red-600'>Contact Us</h4>
                    <h4 className=' hover:text-red-600'>Knowledge Base</h4>
                    <h4 className=' hover:text-red-600'>About Us</h4>
                    <h4 className=' hover:text-red-600'>FAQ</h4>
                </div>
                <div className='text-xl' style={{ lineHeight: '40px' }}>
                    <h2 className='text-2xl text-red-600 font-bold mb-5'>Quick Links</h2>
                    <h4 className=' hover:text-red-600'>Privacy Policy</h4>
                    <h4 className=' hover:text-red-600'>Discussion</h4>
                    <h4 className=' hover:text-red-600'>Terms & Conditions</h4>
                    <h4 className=' hover:text-red-600'>Readers Support</h4>
                </div>
            </div>
            <div className='flex mt-5 justify-around lg:w-3/12 mx-auto mb-5'>
                <FaFacebookF className='m-2 hover:text-red-600' />
                <FaInstagram className='m-2 hover:text-red-600' />
                <FaTwitter className='m-2 hover:text-red-600' />
                <FaSkype className='m-2 hover:text-red-600' />
            </div>
            <hr className='' />
            <p className='text-center mt-5'>Copyright ©2022 bookly.com All Rights Reserved</p>
        </div>
    );
};

export default Footer;