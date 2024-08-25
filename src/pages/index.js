import * as React from "react"
import Nav from "../components/nav"
import Hero from "../components/hero"
import About from "../components/section-2"
import Improving from "../components/section-1"
import CreativePP from "../components/section0"
import Mockup from "../components/section1"
import PricePlans from "../components/section2"
import Testimonial from "../components/section3"
import Upcoming from "../components/section4"
import Amazing from "../components/section5"
import ContactUs from "../components/section6"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <main >
      <Nav />
      <Hero />
      <About />
     <Improving />
     <CreativePP /> 
     <Mockup />
     <PricePlans />
     <Testimonial />
     <Upcoming />
     <Amazing />
     <ContactUs />
     <Footer />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
