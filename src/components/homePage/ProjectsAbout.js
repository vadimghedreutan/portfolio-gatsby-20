import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Img from "gatsby-image"

//Styled Components
import {Container, Section, Grid} from '../../styles/globalStyles'

//Utils
import Scroll from '../scroll'

//Icons svg
import IconResponsive from "../../assets/icons/window-fill.svg";
import IconSearch from "../../assets/icons/search-eye-line.svg";
import IconData from "../../assets/icons/database-fill.svg";
import IconLock from "../../assets/icons/lock-password-fill.svg";
import IconLight from "../../assets/icons/flashlight-fill.svg";

const ProjectsAbout = () => {
  const data = useStaticQuery(graphql`
  query ImagesAbout {
    images: allFile( filter: { relativeDirectory: { eq: "about" }}) {
      nodes {
        id
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`)
  return (
    <Section>
      <Container>
        <Grid info>
          <div>
            <IconResponsive />
            <h2>Responsive Design</h2>
            <p>Websites that work on all devices and screen resolutions, so your visitors have the best user experience. With Responsive Design, too little text on smartphones and back and forth zooming are a thing of the past.</p>
          </div>
          <div>
            <IconData />
            <h2>Content Management System</h2>
            <p>Complete and efficient control of your website. In simple terms, a CMS is a database that manages the contents (images, texts, etc.). Thus, a blog with hundreds of entries can be easily implemented and managed.</p>
          </div>
          <div>
            <IconSearch />
            <h2>SEO</h2>
            <p>Search engine optimization is very important, because your website deserves to be found in search engines like Google, Bing and Yahoo. This increases your visitor numbers and ideally your sales.</p>
          </div>
          <div>
            <IconLight />
            <h2>Fast Loading Times</h2>
            <p>Nothing disturbs surfing the web more than a website that loads very slowly. Already 40% of the visits leave the site if the loading time is more than 3 seconds. Google also measures the loading time of a website and ranked the page accordingly in the search results.</p>
          </div>
          <div>
            <IconLock />
            <h2>SSL-Encryption</h2>
            <p>Security is an important issue these days. It's good to know that my websites are encrypted using SSL. Data is exchanged between the server and the browser of your visitors via a secure connection.</p>
          </div>
        </Grid>

        <Grid about="true">
          {data.images.nodes.map(image => (
            <Scroll key={image.id}>
              <div className="lol">
                <Img
                  style={{ width: '100%' }}
                  fluid={image.childImageSharp.fluid}
                />
              </div>
            </Scroll>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}

export default ProjectsAbout
