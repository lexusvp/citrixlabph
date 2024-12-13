import React from 'react' 
import {CgShoppingCart} from 'react-icons/cg' 
import Link from 'next/link';
import headerImg from '../src/assets/mainbg.jpg'

const HeroBanner = () => {
 
 
  return (
    <header className="header">
  
            {/* Background Layer */}
            <div className="background-layer"></div>
          {/* Background Layer */}
          <div
            className="background-layer"
            style={{
              position: 'absolute', // Positioned absolutely to cover the full page
              marginTop: 0,
              left: '-30px',
              width: '120%', // Full width
              height: '47vh', // Full height /workspaces/juhaon/src/assets/mainbg.jpg
              background: `url({headerImg) top center no-repeat rgba(243,243,243,1)`,
              filter: 'progid:DXImageTransform.Microsoft.gradient(GradientType=0, startColorstr="#4cf3f3f3", endColorstr="#4cf3f3f3")',
              backgroundSize: 'cover',
              backgroundPosition: 'left',
              zIndex: -1, // Ensures it stays behind the body content
            }}
          ></div>
     
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
