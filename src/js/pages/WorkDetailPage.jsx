
import { useEffect, useState } from 'react'
import PageData from '../PageData'
import Section from '../components/Section'
import PageWrapper from './PageWrapper'
import ContactUs from '../components/ContactUs'
import { v4 as uuidv4 } from 'uuid';
import { Analytics } from "@vercel/analytics/react"
import PageTransition from '../components/PageTransition'
import Button from '../elements/Button'


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
        <PageWrapper>
            {pageData ?
                <>
                    <Section class="work-detail height-auto light">
                        <div className="description">

                            <h1><em>{pageData.brand}:</em> {pageData.jobName}</h1>
                            <div>{
                                pageData.description.long.map(element => {
                                    return (
                                        <>
                                            <p
                                                key={uuidv4()}
                                            >{element.text}</p>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        <img src={pageData.mainImage.desktop} alt={pageData.jobName} className='img-cover' />

                        {
                            pageData.website ?

                                <div className='padding-top'>
                                    <Button
                                        to={pageData.website}
                                        class="red"
                                    >View live site</Button>
                                </div>

                                : null
                        }

                    </Section>
                    <ContactUs />
                    <Analytics />
                </>
                : null}
            <PageTransition />
        </PageWrapper>
    )
}

export default WorkDetailPage
