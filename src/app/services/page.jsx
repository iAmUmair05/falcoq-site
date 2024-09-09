import ServicesSection from '@/Components/ServicesSection'
import Technologies from '@/Components/Technologies'
import PageHero from '@/Components/ui/PageHero'
import React from 'react'



export const metadata = {

    title: "Services"

}

const Services = () => {

    let routeName = "Services"


    return (
        <>


            <PageHero routeName={routeName} imgUrl={"/servicesPage.jpeg"} />

            <ServicesSection />

            <div className='my-12 sm:my-24'>
                <Technologies />

            </div>

        </>
    )
}

export default Services