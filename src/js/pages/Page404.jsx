
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'
import Section from '../components/Section'
import Button from '../elements/Button'

function Page404() {

    return (
        <>
            <Nav />

            <Section class="svh100 light">
                <h1>Oh NO,</h1>
                <h3>Something is not right. <br />
                    Don&rsquo;t fret, you&rsquo;ve just hit a 404 Error</h3>
                <Button to={"/"} class="green">Let&rsquo;s go home</Button>
            </Section>

            <ContactUs />
            <Footer />
            <div className="noise"></div>

        </>
    )
}

export default Page404
