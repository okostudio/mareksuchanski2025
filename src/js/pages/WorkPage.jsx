
import Nav from '../components/Nav'
import Work from '../components/Work'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'
import { Analytics } from "@vercel/analytics/react"

function WorkPage() {

    return (
        <>
            <Nav />

            <Work />

            <ContactUs />
            <Footer />
            <div className="noise"></div>
            <Analytics />
        </>
    )
}

export default WorkPage
