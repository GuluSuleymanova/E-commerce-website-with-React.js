import React from 'react'
import Sec4_Product from '../AddtoCart/Sec4_Product'
import Sec6_Product from '../AddtoCart/Sec6_Product'
import BlogHome from '../Homepages/BlogHome/BlogHome'
import Brands from '../Homepages/Brands'
import MainCarousel from '../Homepages/MainCarousel'
import Section1 from '../Homepages/Section1'
import Section2 from '../Homepages/Section2'
import Section3 from '../Homepages/Section3'
import Section5 from '../Homepages/Section5'

const Home = () => {
  return (
    <div>
      <MainCarousel/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Sec4_Product/>
      <Section5/>
      <Sec6_Product/>
      <BlogHome/>
      <Brands/>

    </div>
  )
}

export default Home