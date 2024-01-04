import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
        <Link href="/">
            <Image 
                src="https://links.papareact.com/a943ae"
                alt="Disney logo"
                width={120}
                height={100}
                className='cursor-pointer invert-0 dark:invert'
            />
        </Link>
    </header>
  )
}

export default Header