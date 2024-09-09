import ContactForm from '@/Components/ContactForm'
import GoogleMap from '@/Components/GoogleMap'
import PageHero from '@/Components/ui/PageHero'
import React from 'react'



export const metadata = {

    title: "Contact Us"

}

const page = () => {

    let routeName = "Get in Touch"
    return (

        <>
            <PageHero routeName={routeName} imgUrl={"/contactPage.jpg"} />

            <div className='mt-8 sm:mt-16'>
                <ContactForm />
            </div>

            <GoogleMap />

        </>
    )
}

export default page