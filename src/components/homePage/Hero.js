import React from 'react'
import { motion } from "framer-motion"

//Icons
import Icon from "../../assets/icons/map-pin-2-fill.svg";

//styled components
import {SectionHero, Location} from '../../styles/homeStyles'
import {Container} from '../../styles/globalStyles' 

const Hero = () => {
  return (
    <SectionHero>
      <Container>
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -20, opacity: 0 }}
          transition={{ duration: 1, ease: [.25, .75, .5, 1.25] }}
        >
          <h1>Hi! I’m Ghedrik,</h1>
          <p>a Web Developer based in</p>
          <Location>
            <Icon />  
            Stuttgart, Germany
          </Location>
        </motion.div>
      </Container>
    </SectionHero>
  )
}

export default Hero
