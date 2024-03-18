import React from 'react'
import HeaderSection3 from '../header/HeaderSection3'
import FooterSection from '../footer/FooterSection'

const Layout = ({children}) => {
  return (
    <>
        <HeaderSection3/>
        {children}
        <FooterSection/>
    </>
  )
}

export default Layout