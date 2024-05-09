import React from 'react'

const Footer = () => {
    const yr = new Date().getFullYear();
  return (
    <footer className='bg-white border-t'>
        <div className='mx-auto py-10'>
            <p className='text-center text-xs text-black'>&copy; {yr} Store Name, Inc. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer;
