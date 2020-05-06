import React, {useEffect} from 'react'
import {Link} from 'gatsby'

//Icons
import IconMail from "../assets/icons/mail-send-fill.svg";

//styled components
import { HeaderTop, Logo, Menu} from '../styles/headerStyles'
import { Container, Flex, ToggTheme} from '../styles/globalStyles'

//global Context
import {useGlobalStateContext, useGlobalDispatchContext} from '../context/globalContext'

const Header = () => {
  const dispatch = useGlobalDispatchContext()
  const {currentTheme} = useGlobalStateContext()

  const toggleTheme = () => {
    if(currentTheme === 'dark') {
      dispatch({type: "TOGGLE_THEME", theme: "light"})
    } else {
      dispatch({type: "TOGGLE_THEME", theme: "dark"})
    }
  }

  useEffect(() => {
    window.localStorage.setItem('theme', currentTheme)
  }, [currentTheme])

  return (
    <HeaderTop
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -20, opacity: 0 }}
      transition={{ duration: 1, ease: [.25, .75, .5, 1.25] }}
    >
      <Container>
        {console.log(currentTheme)}
        <Flex spaceBetween>
          <Logo onClick={toggleTheme}>
            VG <span>Dev</span>
          </Logo>
          <Menu>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">Projects</Link></li>
              <li><a href="mailto:vadim.ghedreutan@gmail.com"><IconMail /></a></li>
            </ul>
          </Menu>
        </Flex>
        <ToggTheme onClick={toggleTheme}>
          {currentTheme === 'dark' ? 'Light' : 'Dark'} Theme
        </ToggTheme>
      </Container>
    </HeaderTop>
  )
}

export default Header
