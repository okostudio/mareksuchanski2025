import './App.scss'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Testemonials from './components/Testemonials'
import Capabilities from './components/Capabilities'
import Work from './components/Work'
import Footer from './components/Footer'
import ContactUs from './components/ContactUs'

function App() {

  return (
    <>
      <Nav />
      <Hero />
      <Testemonials />
      <Capabilities />
      <Work />
      <ContactUs />
      <Footer />
      <div className="noise"></div>

    </>
  )
}

export default App
