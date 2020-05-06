import React from 'react'

//Components 
import Layout from '../components/Layout'
import Hero from '../components/homePage/Hero'
import ProjectsTop from '../components/homePage/ProjectsTop'
import ProjectsBottom from '../components/homePage/ProjectsBottom'

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <ProjectsTop />
      <ProjectsBottom />
    </Layout>
  )
}

export default IndexPage
