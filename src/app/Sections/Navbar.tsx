import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
    const [isClick, setIsClick] = useState(false);

    const toggleNavbar = () => {
        setIsClick(!isClick);
    };

    return (
        <><nav className='bg-tilt h-20 shadow-md sticky top-0 z-10'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-full'>
                    <div className='flex items-center'>
                        <Link href='/' passHref>
                            <Image src="/images/sno_logo-removebg-preview.png" alt="Spice N' Oil Logo" width="150" height="90" />
                        </Link>
                    </div>
                    <div className='hidden md:flex space-x-4'>
                        <NavItem href='/' title='Home' />
                        <NavItem href='/about' title='About Us' />
                        <NavItem href='/products' title='Products' />
                        <NavItem href='/contact' title='Contact' />
                    </div>
                    <div className='md:hidden'>
                        <button
                            className='inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                            aria-label='Toggle navigation'
                            onClick={toggleNavbar}>
                            {isClick ? (
                                <CloseIcon />
                            ) : (
                                <MenuIcon />
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isClick && (
                <div className="md:hidden bg-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <NavItem href='/' title='Home' mobile={true} />
                        <NavItem href='/about' title='About Us' mobile={true} />
                        <NavItem href='/products' title='Products' mobile={true} />
                        <NavItem href='/contact' title='Contact' mobile={true} />
                    </div>
                </div>
            )}
        </nav>
</>
    );
}

interface NavItemProps {
    href: string;
    title: string;
    mobile?: boolean; // Optional property
}

const NavItem: React.FC<NavItemProps> = ({ href, title, mobile }) => (
    <Link 
        href={href} 
        className={`block ${mobile ? 'text-light-red' : 'text-light-red'} hover:bg-light-red hover:text-white rounded-lg px-3 py-2 font-semibold`}
        passHref
    >
        {title}
    </Link>
);

const MenuIcon = () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#333">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const CloseIcon = () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#333">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);
