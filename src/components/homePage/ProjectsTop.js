import React from 'react'
import { motion } from "framer-motion"
import {graphql, useStaticQuery} from 'gatsby'
import Img from "gatsby-image"

import {Container, SectionTitle, Section} from '../../styles/globalStyles'

const ProjectsTop = () => {
  const data = useStaticQuery(graphql`
    query Images {
      covid: file(relativePath: {eq: "travel_covid.png"}) {
        id
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid
          }
        }
      },
      book: file(relativePath: {eq: "book_share.png"}) {
        id
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid
          }
        }
      },
      type_game: file(relativePath: {eq: "type_game.png"}) {
        id
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid
          }
        }
      },
      fitness: file(relativePath: {eq: "fitness.png"}) {
        id
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `)
  return (
    <Section>
      <Container>
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -20, opacity: 0 }}
          transition={{ duration: 1, ease: [.25, .75, .5, 1.25] }}
        >
          <SectionTitle>
            Projects
          </SectionTitle>
            <div className="grid-top">
              <a href="https://travelwarning.netlify.app/" className="grid-top__l-img">
                <Img
                  style={{ width: '100%' }} 
                  fluid={data.covid.childImageSharp.fluid}
                />
              </a>
              <a href="https://booksharegkapp.herokuapp.com" className="grid-top__r-img">
                <Img
                  style={{ width: '100%' }}  
                  fluid={data.book.childImageSharp.fluid}
                />
              </a>
              <a href="https://typeracer-3f0ce.firebaseapp.com" className="grid-top__lb-img">
                <Img
                  style={{ width: '100%' }}  
                  fluid={data.type_game.childImageSharp.fluid}
                />
              </a>
              <a href="https://fitnesstime-pf.de" className="grid-top__rb-img">
                <Img
                  style={{ width: '100%' }}  
                  fluid={data.fitness.childImageSharp.fluid}
                />
              </a>  
            </div>

        </motion.div>
      </Container>
    </Section>
  )
}

export default ProjectsTop
