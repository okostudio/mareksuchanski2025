
import { useEffect, useState } from 'react'
import PageData from '../PageData'
import Section from '../components/Section'
import PageWrapper from './PageWrapper'
import ContactUs from '../components/ContactUs'
import { v4 as uuidv4 } from 'uuid';
import { Analytics } from "@vercel/analytics/react"
import PageTransition from '../components/PageTransition'
import Button from '../elements/Button'
import { Link } from 'react-router-dom'


const NextWorkLink = (props) => {
    return (
        <Link
            className="work-nav-button"
            to={`/work/${props.data.url}`}
            onClick={
                () => {
                    props.updatePageData(props.data.url)
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                }
            }>
            <div>
                <h4>{props.children}</h4>
                <img src={props.data.mainImage.desktop} alt={props.data.jobName} />
            </div>
        </Link>
    )
}

function WorkDetailPage() {

    // const [pageName, setPageName] = useState(null)
    const [pageData, setPageData] = useState(null)
    const [previousData, setPrevPageData] = useState(null)
    const [nextData, setNextPageData] = useState(null)
    const [Timeline, setTimeline] = useState({})

    const updatePageData = (_url) => {
        const pageUrl = _url ? _url : window.location.href.split("work/")[1]

        console.log("Timeline", Timeline)
        if (_url && Timeline) {

            Timeline.play("start")
        }

        console.log("PAGE URL:", pageUrl)
        // setPageName(pageUrl)
        const index = PageData.work.findIndex(item => item.url === pageUrl);

        setNextPageData(PageData.work[(index + 1) % PageData.work.length])
        setPrevPageData(PageData.work[(index + PageData.work.length - 1) % PageData.work.length])

        const data = PageData.work.find(item => item.url === pageUrl);
        setPageData(data)
    }

    useEffect(() => {
        console.log("got here")
        updatePageData()
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
                                        <p
                                            key={uuidv4()}
                                        >{element.text}</p>
                                    )
                                })}
                            </div>
                        </div>
                        <img src={pageData.mainImage.desktop} alt={pageData.jobName} className='img-cover' />

                        {
                            pageData.website ?

                                <div className='margin-top margin-bottom'>
                                    <Button
                                        to={pageData.website}
                                        class="red"
                                    >View live site</Button>
                                </div>

                                : null
                        }

                    </Section>
                    <Section class="red height-auto">
                        <div className="col2">
                            <NextWorkLink
                                updatePageData={updatePageData}
                                data={previousData}
                            >Previous</NextWorkLink>
                            <NextWorkLink
                                updatePageData={updatePageData}
                                data={nextData}
                            >Next</NextWorkLink>
                        </div>
                    </Section>
                    <ContactUs />
                    <Analytics />
                </>
                : null}
            <PageTransition setTimeline={setTimeline} />
        </PageWrapper>
    )
}

export default WorkDetailPage



