import '../App.scss'
import Nav from '../components/Nav'
import Work from '../components/Work'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'

function WorkDetailPage(props) {

    return (
        <>
            <Nav />
            <h1>{props.slug}</h1>
            <Work />

            <ContactUs />
            <Footer />
            <div className="noise"></div>

        </>
    )
}

export default WorkDetailPage
