import React from 'react' 
import {CgShoppingCart} from 'react-icons/cg' 
import Link from 'next/link';

const HeroBanner = () => {
 
 
  return (
    <header className="header">
  
            {/* Background Layer */}
            <div className="background-layer"></div>

        <div className='header-left-side'>
            <div className='header-content'> 
                <h1>CitrixLab Philippines:</h1>
                <p>&nbsp;Your Trusted IT Solution Provider</p> 
                <p>&nbsp;</p> 
                <small>
                  At CitrixLab, we provide expert Citrix and NetScaler solutions through training, 
                  on-demand labs, and tailored IT support to optimize your IT infrastructure and drive 
                  business performance.
                </small> 
                <p>&nbsp;</p> 
                <Link href='/products'>
                     <button className='btn' type='button'><CgShoppingCart size={26} />  Learn More</button>
                </Link> 
                <p>&nbsp;</p> 
                <p>&nbsp;</p> 
            </div>

        </div>

        <div className='header-right-side'> 
        </div>

    </header>
    
  )
}

export default HeroBanner
