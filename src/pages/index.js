import * as React from "react"
import Nav from "../components/nav"
import Hero from "../components/hero"
import About from "../components/aboutUs"
import Improving from "../components/improveSection"
import CreativePP from "../components/Offers"
import Mockup from "../components/websiteMockup"
import PricePlans from "../components/pricePlans"
import Testimonial from "../components/Testimonial"
import Upcoming from "../components/upcomingEvents"
import Amazing from "../components/ourServices"
import ContactUs from "../components/contactUs"
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

export const Head = () => <title>VME | Home</title>
