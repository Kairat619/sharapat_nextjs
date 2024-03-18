import Link from 'next/link'
import React from 'react'

const HeaderNav = ({position}) => {
  return (
    <nav className="fz-header-nav">
        <ul className={`align-items-center ${position}`}>
           
            <li><Link href="/" className="fz-nav-link fz-submenu-nav-link"><span>Home</span></Link></li> 

            <li><Link href="/about" className="fz-nav-link fz-submenu-nav-link"><span>About</span></Link></li> 
            
            <li><Link href="/shop" className="fz-nav-link fz-submenu-nav-link"><span>Shop</span></Link></li>
            
            <li><Link href="/blog" className="fz-nav-link fz-submenu-nav-link"><span>Blog</span></Link></li>
            
            <li className="fz-nav-item"><Link href="/contact" className="fz-nav-link">Contact</Link></li>
        </ul>
    </nav>
  )
}

export default HeaderNav