import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import SocialLinks from './components/social/SocialLinks'
import About from './components/about/About'
import Portafolio from './components/portafolio/Portafolio'
import Expirence from './components/expirence/Expirence'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portafolio />
      <Expirence />
      <Contact />
      <SocialLinks />
      <Footer/>
      
    </>
  )
}

export default App
