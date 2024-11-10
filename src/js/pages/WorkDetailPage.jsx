
import { useEffect, useState } from 'react'
import PageData from '../PageData'

import Nav from '../components/Nav'
import Work from '../components/Work'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'


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
            <h1>{pageData ? pageData.jobName : null}</h1>
            <Work />

            <ContactUs />
            <Footer />
            <div className="noise"></div>

        </>
    )
}

export default WorkDetailPage
