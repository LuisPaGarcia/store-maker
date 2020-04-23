import React from "react"
import "./styles.css"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import App from "../components/App"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Food Store!</h1>
    <App />
  </Layout>
)

export default IndexPage
