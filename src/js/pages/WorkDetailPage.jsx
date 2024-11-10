
import { useEffect, useState } from 'react'
import PageData from '../PageData'

import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'
import Section from '../components/Section'


function WorkDetailPage() {

    const [pageName, setPageName] = useState(null)
    const [pageData, setPageData] = useState(null)

    useEffect(() => {

        const pageUrl = window.location.href.split("work/")[1]
        setPageName(pageUrl)
        const data = PageData.work.find(item => item.url === pageUrl);
        console.log("data", data, pageName)
        setPageData(data)
    }, [])

    return (
        <>
            <Nav />
            {pageData ?
                <>
                    <Section class="work-detail height-auto light">
                        <div className="description">

                            <h1><em>{pageData.brand}:</em> {pageData.jobName}</h1>
                            <p>{pageData.description.long}</p>
                        </div>
                        <img src={pageData.mainImage.desktop} alt={pageData.jobName} className='img-cover' />


                    </Section>
                </>
                : null}
            <ContactUs />
            <Footer />
            <div className="noise"></div>

        </>
    )
}

export default WorkDetailPage
