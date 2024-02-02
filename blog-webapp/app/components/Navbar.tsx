import React from 'react';
import Link from 'next/link';


const Navbar = () => {
  return (
    <div className='mx-auto max-w-5xl px-6'>
      <div className='flex justify-between items-center h-16 w-full'>
        <Link href="/">
         <div>KE Blogs</div>
        </Link>
        <div>Menu</div>
      </div>
    </div>
  );
};

export default Navbar;
