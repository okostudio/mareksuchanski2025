
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'

function PageWrapper(props) {

    return (
        <>
            <Nav />

            {props.children}

            <ContactUs />
            <Footer />
            <div className="noise"></div>
        </>
    )
}

export default PageWrapper
