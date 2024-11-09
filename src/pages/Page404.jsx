import '../App.scss'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'

function Page404() {

    return (
        <>
            <Nav />

            <section className='light'>
                <h1>Something went wrong!</h1>
                <button>Lets go home</button>
            </section>

            <ContactUs />
            <Footer />
            <div className="noise"></div>

        </>
    )
}

export default Page404
