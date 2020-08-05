import React from 'react'

//hooks
import useGithubData from '../../hooks/useGithubData'

//Icons svg
import IconResponsive from "../../assets/icons/window-fill.svg";
import IconSearch from "../../assets/icons/search-eye-line.svg";
import IconData from "../../assets/icons/database-fill.svg";
import IconLock from "../../assets/icons/lock-password-fill.svg";
import IconLight from "../../assets/icons/flashlight-fill.svg";

//Styled components
import {Container, SectionTitle, Section, Grid} from '../../styles/globalStyles'
import {GithubContent} from '../../styles/homeStyles'

//Utils
import Spinner from '../spinner'
import Emoji from '../emoji'
import Scroll from '../scroll'

const ProjectsBottom = () => {
  const {data, isLoading, isError} = useGithubData()
  if(isLoading) {
    return (
      <Spinner />
    )
  }
  if(isError) {
    return (
      <div className="error">
        <span>Something is off...</span>
      </div>
    )
  }
  
  return (
    <Section>
      <Container>
        <SectionTitle>
          Projects on Github
        </SectionTitle>
        <Grid>
          <div className='github'>
          {isError}
          { data && data.length > 0 ? data.map(item => {
              return (
                <Scroll key={item.id}>
                <GithubContent>
                  <h3><Emoji symbol="🚀" label="rocket"/> <a href={item.html_url}>{item.name}</a></h3>
                  <p>⭢ {item.description}</p>
                  <a href={item.homepage}><span>{item.homepage}</span></a>
                </GithubContent>
                </Scroll>
              )
            })
            : (  
              isLoading
            )
          }
          </div>
          <div className='tools'>
            <div className="tools__content">
              <div className="tools__content-icon">
                  <IconResponsive style={{ fill: '#fff' }} />
              </div>
              <div className="tools__content-title">
                Responsive Design
              </div>
            </div>

            <div className="tools__content">
              <div className="tools__content-icon">
                  <IconSearch style={{ fill: '#fff' }} />
              </div>
              <div className="tools__content-title">
                Optimized for search engines
              </div>
            </div>
    
            <div className="tools__content">
              <div className="tools__content-icon">
                <IconData style={{ fill: '#fff' }} />
              </div>
              <div className="tools__content-title">
                Content Management System
              </div>
            </div>
         
            <div className="tools__content">
              <div className="tools__content-icon">
                <IconLock style={{ fill: '#fff' }} />
              </div>
              <div className="tools__content-title">
                SSL-Encryption
              </div>
            </div>
        
            <div className="tools__content">
              <div className="tools__content-icon">
                <IconLight style={{ fill: '#fff' }} />
              </div>
              <div className="tools__content-title">
                Fast Loading Times
              </div>
            </div>
          </div>
        </Grid>
      </Container>
    </Section>
  )
}

export default ProjectsBottom
