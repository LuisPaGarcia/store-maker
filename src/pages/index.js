import React from "react"
import "./styles.css"
import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Food Store!</h1>
    <Image />
  </Layout>
)

export default IndexPage
