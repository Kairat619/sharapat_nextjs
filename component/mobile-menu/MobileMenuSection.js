import { FarzaaContext } from '@/context/FarzaaContext'
import Link from 'next/link'
import React, { useContext } from 'react'

const MobileMenuSection = () => {
    const {isDropdownOpen,handleDropdownToggle} = useContext(FarzaaContext)
    return (
        <div className="mean-bar">
            <Link 
            href="#nav" 
            className="meanmenu-reveal"
            ><span><span><span></span></span></span>
            </Link>
            <nav className="mean-nav">
                <div className="align-items-center justify-content-center mobile-menu-list-items">
                    <div className="fz-dropdown fz-nav-item">
                    <ul>
                    <li><Link href="/" className="fz-nav-link fz-submenu-nav-link sub-menu-link"><span>Home</span></Link></li>
                    </ul>
                    </div>

                    <div className="fz-dropdown fz-nav-item">
                    <ul>
                        <li><Link href="/about" className="fz-nav-link fz-submenu-nav-link sub-menu-link"><span>About</span></Link></li>
                        </ul>
                    </div>

                    <div className="fz-dropdown fz-nav-item">
                    <ul>
                        <li><Link href="/shop" className="fz-nav-link fz-submenu-nav-link sub-menu-link"><span>Shop</span></Link></li>
                        </ul>
                    </div>
                    
                    <div className="fz-dropdown fz-nav-item">
                            <ul >
                                <li><Link href="/blog" className="fz-nav-link fz-submenu-nav-link sub-menu-link"><span>Blog</span></Link></li>  
                            </ul>       
                    </div>

                    <div className="fz-dropdown fz-nav-item">
                    <ul>
                        <li><Link href="/contact" className="fz-nav-link fz-submenu-nav-link sub-menu-link"><span>Contact</span></Link></li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default MobileMenuSection