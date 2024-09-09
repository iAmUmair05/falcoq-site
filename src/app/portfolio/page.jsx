import PortfolioPage from '@/Components/PortfolioPage'
import PageHero from '@/Components/ui/PageHero'
import React from 'react'


export const metadata = {

    title: "Portfolio"

}

const Portfolio = () => {

    let routeName = "Portfolio"
    return (
        <>

            <PageHero routeName={routeName} imgUrl={"/portfolioPage.jpg"} />
            <PortfolioPage />

        </>
    )
}

export default Portfolio;