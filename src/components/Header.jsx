import { Button, Navbar, TextInput } from 'flowbite-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiSearch } from "react-icons/fi";
import { CgDarkMode } from "react-icons/cg";

const Header = () => {
    const location = useLocation()
  return (
    <Navbar className='border-b-2'>
        <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-yellow-600 via-purple-700 to-orange-700 rounded-lg text-white'>Pavan's</span>
            Blog
        </Link>
        <form>
            <TextInput
                type='text'
                placeholder='search...'
                rightIcon={FiSearch}
                className='hidden lg:inline'
            />
        </form>
        <Button className='lg:hidden' color='gray' pill>
            <FiSearch/>
        </Button>
        <div className='flex gap-2 md:order-2'>
            <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
                <CgDarkMode/>
            </Button>
            <Link to='/signIn'>
                <Button gradientDuoTone='purpleToBlue' pill>
                    SignIn
                </Button>
            </Link>
            <Navbar.Toggle/>
        </div>
        <Navbar.Collapse>
            <Navbar.Link active={location.pathname==='/'} as={'div'}>
                <Link to='/'>
                    Home
                </Link>
            </Navbar.Link>
            <Navbar.Link active={location.pathname==='/projects'} as={'div'}>
                <Link to='/projects'>
                    Projects
                </Link>
            </Navbar.Link>
            <Navbar.Link active={location.pathname==='/about'} as={'div'}>
                <Link to='/about'>
                    About
                </Link>
            </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Header