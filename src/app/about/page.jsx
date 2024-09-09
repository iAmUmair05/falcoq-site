import AboutSection from '@/Components/AboutSection'
import AchievementsSection from '@/Components/AchievementsSection'
import OurTeam from '@/Components/OurTeam'
import PageHero from '@/Components/ui/PageHero'
import React from 'react'

export const metadata = {

    title: "About Us"

}

const About = () => {

    let routeName = "About Us"

    return (
        <>

            <PageHero routeName={routeName} imgUrl={"/aboutPage.jpg"} />
            <AchievementsSection />
            <AboutSection />

            <div className='my-8 sm:my-16'>

                <OurTeam />

            </div>

        </>
    )
}

export default About;