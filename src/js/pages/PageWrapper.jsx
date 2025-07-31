
import Nav from '../components/Nav'
import Footer from '../components/Footer'
// import ContactUs from '../components/ContactUs'
import { useEffect, useRef } from 'react'
import { useMouse } from '../hooks/UseMouse'

function PageWrapper(props) {
    const { mousePosition, mouseMovement } = useMouse();
    const cursor = useRef();


    useEffect(() => {
        // const rad = Math.atan(mouseMovement.y / mouseMovement.x)
        // const angle = rad ? 180 / Math.PI * rad : 0;
        cursor.current.style.transform = `
            translate(${mousePosition.x}px,${mousePosition.y}px) 
            `
        // rotate(${angle}deg) 
        // scaleX(${Math.max(1, Math.min(5, Math.sqrt(Math.pow(mouseMovement.x, 2) + Math.pow(mouseMovement.y, 2))))}) 
    }, [mousePosition, mouseMovement,])


    return (
        <>
            <Nav />

            {props.children}



            <Footer />
            <div className="noise"></div>
            <div className="cursor" ref={cursor}></div>
        </>
    )
}

export default PageWrapper
