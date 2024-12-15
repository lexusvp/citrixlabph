import React, { useState } from 'react'
import Image from 'next/image'
import {CiSearch} from 'react-icons/ci'
import {CgShoppingCart} from 'react-icons/cg'
import { CgUser } from 'react-icons/cg'
import logo from '../src/assets/Logo.png'
//import Link from 'next/link'
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useStateContext } from '../context/StateContext';

import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = ({Searchproducts}) => {
  const {showCart, setShowCart, totalQty} = useStateContext();
  const [toggleMenu, setToggleMenu] = useState(false);
  // const [searchTerm, setSearchTerm] = useState('')

  const router = useRouter();
  const isActive = (path) => router.pathname === path;
 
  // Dropdown items for small screen menu
  const menuItems = [
    { href: '/female', label: 'Female' },
    { href: '/male', label: 'Male' },
    { href: '/kids', label: 'Kids' },
    { href: '/products', label: 'All Products' }
  ];

  // Cart button element
  const CartButton = (
    <Link href='/cart'>
      <button className='cart-small-screen' onClick={() => setShowCart(false)}>
        <CgShoppingCart size={22} />
        <span className='cart-item-qty'>{totalQty}</span>
      </button>
    </Link>
  );

  return (
    <nav>
      <Link href='/'>
        <Image src={logo} width={164} height={65}  alt='logo' />
      </Link> 
       
        <Link href='/solutions'><li className='nav-item'>Solutions</li></Link>
        <Link href='/platform'><li className='nav-item'>Platform</li></Link>
        <Link href='/resources'><li className='nav-item'>Resources</li></Link>
        <Link href='/support'><li className='nav-item'>Support</li></Link> 
        <Link href='/partners'><li className='nav-item'>Partners</li></Link> 

        <div className='space-bar'> 
        </div>

        <div className='search-bar'>
          <CiSearch />
          <input 
            type='text' 
            placeholder='Search here'/>
        </div>
        {/* onChange={(event) => {
              setSearchTerm(event.target.value);
          }} */}

      {showCart ?
      <Link href='/cart'>
        <button className='cart' onClick={() => setShowCart(false)}>   
          <CgUser size={22} />
          <span className='cart-item-qty'>{totalQty}</span> 
        </button>
      </Link> 
      : 
      <button className='cart' onClick={() => setShowCart(true)}> 
        <CgUser size={22} />
        <span className='cart-item-qty'>{totalQty}</span>
      </button> 
      }

    <Link href='/contact'><li className='nav-item'>&nbsp;Contact Us&nbsp;</li></Link> 

{/*
      <div className='navbar-smallscreen'>
        <RiMenu3Line color='black' fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className='navbar-smallscreen_overlay'>
            <Link href='/'>
              <Image className='logo-small' src={logo} width={140} height={140} alt='logo' />
            </Link>
            <RiCloseLine  color='black' fontSize={27} className='close_icon' onClick={() => setToggleMenu(false)} />
            <ul className='navbar-smallscreen_links'>
              <Link href='/cart'>
                  <button className='cart-small-screen' onClick={() => setShowCart(false)}>   
                    <CgShoppingCart size={22} />
                    <span className='cart-item-qty'>{totalQty}</span> 
                  </button>
              </Link> 
              <Link href='/female'><li>Female</li></Link>
              <Link href='/male'><li>Male</li></Link>
              <Link href='/kids'><li>Kids</li></Link>
              <Link href='/products'><li>All Products</li></Link>
            </ul>
          </div>
        )}
      </div>

*/}

      <div className='navbar-smallscreen'>
        <RiMenu3Line color='black' fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className='navbar-smallscreen_overlay'>
            <Link href='/'>
              <Image className='logo-small' src={logo} width={140} height={140} alt='logo' />
            </Link>
            <RiCloseLine color='black' fontSize={27} className='close_icon' onClick={() => setToggleMenu(false)} />
            <ul className='navbar-smallscreen_links'>
              {CartButton}
              {menuItems.map((item, index) => (
                <Link key={index} href={item.href}>
                  <li>{item.label}</li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>




    </nav>
  )
}

export default Navbar
