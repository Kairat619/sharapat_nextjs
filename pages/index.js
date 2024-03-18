import FooterSection2 from '@/component/footer/FooterSection'
import HeaderSection3 from '@/component/header/HeaderSection3'
import JewelleryShopMain from '@/component/main/JewelleryShopMain'
import Head from 'next/head'
import React from 'react'

export const getStaticProps = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_HOST;

  const resOrnamentData = await fetch(`${baseUrl}/api/ornaments`)
  const ornamentsData = await resOrnamentData.json()

  const resTestimonialData = await fetch(`${baseUrl}/api/testimonialSliderList`)
  const testimonialStaticData = await resTestimonialData.json()

  const resJewelleryGalleryData = await fetch(`${baseUrl}/api/jewelleryGallery`)
  const jewelleryGalleryStaticData = await resJewelleryGalleryData.json()

  const resBlogData = await fetch(`${baseUrl}/api/blogs`)
  const blogStaticData = await resBlogData.json()

  return { props: {
    ornamentsData,
    testimonialStaticData,
    jewelleryGalleryStaticData,
    blogStaticData,
  }}
}
export default function jewelleryShop(props) {
  const {
    ornamentsData,
    testimonialStaticData,
    jewelleryGalleryStaticData,
    blogStaticData
  } = props
  return (
    <>
        <Head>
        <title>Sharapat - Jewellery Shop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/favicon.png" />
        </Head>
    <>
        <HeaderSection3/>
        <JewelleryShopMain 
        ornamentsData={ornamentsData}
        testimonialStaticData={testimonialStaticData}
        jewelleryGalleryStaticData={jewelleryGalleryStaticData}
        blogStaticData={blogStaticData}
         />
        <FooterSection2/>
    </>
    </>
  )
}
