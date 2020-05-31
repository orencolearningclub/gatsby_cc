import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" />
    <h1>Read all about us!</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio nemo, est dolorum aliquam sequi nulla consequatur id facilis qui cumque quos quidem quaerat quo numquam! Facilis nostrum dolorem perferendis odio.
    </p>
    <Link to="/">Home</Link>
  </Layout>
)

export default AboutPage

