import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = () => (
  <Layout>
    <SEO title="Our Services" />
    <h1>Read about our services below!</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quasi tempore incidunt, omnis quisquam aut blanditiis officia, quod asperiores minima fugit excepturi minus. Voluptates mollitia quo repellendus sunt ea amet.</p>
    <Link to="/">Home</Link>
  </Layout>
)

export default ServicesPage
