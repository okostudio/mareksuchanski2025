
import { useEffect, useState } from 'react'
import PageData from '../PageData'
import Section from '../components/Section'
import PageWrapper from './PageWrapper'


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
                            <p>{pageData.description.long}</p>
                        </div>
                        <img src={pageData.mainImage.desktop} alt={pageData.jobName} className='img-cover' />

                    </Section>
                </>
                : null}
        </PageWrapper>
    )
}

export default WorkDetailPage
