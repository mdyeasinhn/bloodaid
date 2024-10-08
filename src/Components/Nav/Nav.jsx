import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Container from '../Shared/Container';
import { AiOutlineMenu } from 'react-icons/ai'
import avater from "../../assets/Image/Home/avater.png"
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { user, logOut } = useAuth();
    return (
        <div className=' w-full bg-white z-10 shadow-sm mx-auto '>
            <div className='py-4 border-b-[1px]'>

                <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
                    {/* Logo */}
                    <Link to='/'>
                        <h2 className='text-3xl text-red-500 font-bold'>BloodBank</h2>
                    </Link>
                    {/* Dropdown Menu */}
                    <div className='relative'>
                        <div className='flex flex-row items-center gap-3'>


                            <Link to='/' className='block rounded-xl   px-4 py-2 hover:bg-neutral-100 transition font-semibold' >       
                          Home
                            </Link>
                            <Link to='/blog' className='block rounded-xl   px-4 py-2 hover:bg-neutral-100 transition font-semibold' >       
                            Blog
                            </Link>

                            {/* Dropdown btn */}
                            <div
                                onClick={() => setIsOpen(!isOpen)}
                                className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                            >
                                <AiOutlineMenu />
                                <div className='hidden md:block'>
                                    {/* Avatar */}
                                    <img
                                        className='rounded-full'
                                        referrerPolicy='no-referrer'
                                        src={user && user?.photoURL ? user?.photoURL : avater}
                                        alt='profile'
                                        height='30'
                                        width='30'
                                    />
                                </div>
                            </div>
                        </div>
                        {isOpen && (
                            <div className='z-10 absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
                                <div className='flex flex-col cursor-pointer'>


                                    {user ? (
                                        <>
                                            <Link
                                                to='/dashboard'
                                                className='block px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                            >
                                                Dashboard
                                            </Link>
                                            <div
                                                onClick={logOut}
                                                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                                            >
                                                Logout
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <Link
                                                to='/login'
                                                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                            >
                                                Login
                                            </Link>
                                            <Link
                                                to='/signup'
                                                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                            >
                                                Sign Up
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Nav;