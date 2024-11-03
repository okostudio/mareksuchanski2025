import { useState } from 'react'
import './App.scss'
import Nav from './components/Nav'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Hero />
      <section className='green'>

      </section>
    </>
  )
}

export default App
