import React from 'react'
import Hero from '../component/Hero'
import FeaturedDestination from '../component/FeaturedDestination'
import ExclusiveOffers from '../component/ExclusiveOffers'
import Testimonial from '../component/Testimonial'
import NewsLetter from '../component/NewsLetter'
import RecommandedHotels from '../component/RecommandedHotels'

const Home = () => {
    return (
        <>
            <Hero />
            <RecommandedHotels />
            <FeaturedDestination />
            <ExclusiveOffers />
            <Testimonial />
            <NewsLetter />
        </>
    )
}

export default Home
