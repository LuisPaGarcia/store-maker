import React from "react"
import "./styles.css"
import Layout from "Components/Layout"
import SEO from "Components/SEO"
import App from "Components/App"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <App />
  </Layout>
)

export default IndexPage
