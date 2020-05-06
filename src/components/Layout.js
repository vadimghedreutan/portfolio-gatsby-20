import React from 'react'
import PropTypes from 'prop-types';
import Helmet from 'react-helmet'

//Style scss
import '../scss/app.scss'

//styled components
import { normalize } from "styled-normalize"
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import { lightTheme, darkTheme } from '../styles/theme';

//Hooks
import useSiteMetadata from '../hooks/useSiteMetadata';

//global Context
import {useGlobalStateContext} from '../context/globalContext'

//Components 
import Header from './header'
import Footer from './footer'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  :root {
    --red: #f04176;
    --lightBlue: #e7f4fb;
    --green: #00d7c0;
    --fontTitle: 'Oswald', sans-serif;
  } 
  * {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
    font-size: calc(10px + 2vmin);
    background: ${props => props.theme.body};
    color: ${props => props.theme.text};
    overscroll-behavior: none;
    overflow-x: hidden;
  }
`

const Layout = ({ children }) => {
    const {currentTheme} = useGlobalStateContext()
    const { title } = useSiteMetadata();
      return (
      <>
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: 'You need a website for your startup or business?' },
            { name: 'keywords', content: 'create website, responsive web design, web developer, website, website design, web designer'},
          ]}
        />

        <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
          <GlobalStyle />
          <Header />
            <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </>
    );
  };

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
