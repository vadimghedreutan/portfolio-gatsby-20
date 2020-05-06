import React from 'react'

//Components
import Layout from '../components/Layout'

//Styled Components
import {Container, NotFoundTitle, NotFound, HeadLine} from '../styles/globalStyles'

const parent = {
  initial: {y: 800},
  animate: {
    y: 0,
    transiction: {
      staggerChildren: 0.2,
    }
  }
}
const child = {
  initial: {y: 800},
  animate: {
    y: 0,
    transiction: {
      duration: 1,
      ease: [0.33, 1, 0.68, 1],
    }
  }
}

const NotFoundPage = () => (
  <Layout>
    <Container>
        <NotFound>
          <NotFoundTitle variants={parent} initial='initial' animate='animate'>
            <HeadLine variants={child}>Page</HeadLine>
            <HeadLine variants={child}>Not</HeadLine>
            <HeadLine variants={child}>Found</HeadLine>
          </NotFoundTitle>
        </NotFound>
    </Container>
  </Layout>
)

export default NotFoundPage
