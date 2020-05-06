import React from 'react'
import { motion } from "framer-motion"

//Icons svg
import IconGithub from "../assets/icons/github-fill.svg";
import IconInsta from "../assets/icons/instagram-line.svg";
import IconTwitter from "../assets/icons/twitter-fill.svg";

import {Container, Flex, Footer} from '../styles/globalStyles'

//Components
import Emoji from './emoji' 


const footer = () => {
  return (
    <Footer>
      <Container>
        <Flex spaceBetween footer>
          <p>© {(new Date().getFullYear())} - Designed and build by me <Emoji symbol="✌️" label="hi"/></p>
          <ul>
            <li>
              <a href="https://github.com/vadimghedreutan">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconGithub />
              </motion.div>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/vadim_ghedreutan/">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconInsta />
              </motion.div>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/GhedreutanVadim">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconTwitter />
              </motion.div>  
              </a>
            </li>
          </ul>
        </Flex>
      </Container>
    </Footer>
  )
}

export default footer
