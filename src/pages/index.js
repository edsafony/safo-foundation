// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home - Safo Foundation">
      <p>Bringing opportunity to West Africa through education scholarship.</p>
      <StaticImage
        alt="Dr. Safo at her office"
        src="../images/Margaret Safo_Office_Cropped.jpg"
      />

    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage