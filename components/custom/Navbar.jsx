import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';

const Navbar = () => {
  return (
    <div>
        <Image src={'/logo.jpg'}  width={500} height={300} alt="logo" />
        <Button >Get started</Button>
    </div>
  )
}

export default Navbar