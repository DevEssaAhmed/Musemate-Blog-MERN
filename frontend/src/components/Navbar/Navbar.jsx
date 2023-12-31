import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { images } from '../../constants';

const navItemLinks = [
  { name: 'Home', type: 'link' },
  { name: 'Blog', type: 'link' },
  { name: 'Articles', type: 'dropdown', items: ['About us', 'Contact Us'] },
];

const NavItem = ({ item }) => {
  const { dropDown, setDropDown } = useState(false);

  const toggleDropdownHandler = () => {
    setDropDown((curState) => {
      return !curState;
    });
  };

  return (
    <li className='relative group'>
      {item.type === 'link' ? (
        <>
          <Link className='px-4 py-2'>{item.name}</Link>
          <span className='cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold top-0 right-0 opacity-0 group-hover:right-[90%] group-hover:opacity-100'>
            |
          </span>
        </>
      ) : (
        <div className='flex flex-col items-center'>
          <button
            className='px-4 py-2 flex gap-x-1 items-center'
            onClick={toggleDropdownHandler}
          >
            {item.name}
            <MdKeyboardArrowDown />
          </button>

          <div
            className={`${
              dropDown ? 'block' : 'hidden'
            } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
          >
            <ul className='bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden'>
              {item.items.map((page, index) => {
                return (
                  <Link
                    key={index}
                    to='/'
                    className='hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft'
                  >
                    {page}
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuOpenHandler = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <section className='sticky top-0 right-0 left-0 bg-white z-50'>
      <nav className='container mx-auto px-5 flex justify-between py-4 items-center'>
        <Link to='/'>
          <img className='w-36' src={images.Logo} alt='logo' />
        </Link>
        <div className='lg:hidden z-20'>
          {menuOpen ? (
            <AiOutlineClose className='w-6 h-6' onClick={menuOpenHandler} />
          ) : (
            <AiOutlineMenu className='w-6 h-6' onClick={menuOpenHandler} />
          )}
        </div>
        <div
          className={`${
            menuOpen ? 'right-0' : '-right-full'
          } transition-all duration-300 mt-[60px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
        >
          <ul className='text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold'>
            {navItemLinks.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>
          <button className='mt-5 lg:mt-0 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-100'>
            Sign In
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
