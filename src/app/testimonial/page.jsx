import TestimonialSection from '@/Components/TestimonialSection'
import PageHero from '@/Components/ui/PageHero'
import React from 'react'

export const metadata = {

    title: "Testimonials"

}

const Testimonial = () => {

    let routeName = "Testimonial"
    return (

        <>
            <PageHero routeName={routeName} imgUrl={"/testimonialPage.jpg"} />
            <TestimonialSection />

        </>
    )
}

export default Testimonial;