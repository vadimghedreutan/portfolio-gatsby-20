import styled from "styled-components"
import {motion} from 'framer-motion'


export const HeaderTop = styled(motion.header)`
  height: 0px;
  width: 100%;
  position: absolute;
  top: 10px;
  right: 0;
  left: 0;
  z-index: 99;
`

export const Logo = styled.div`
  font-family: var(--fontTitle);
  font-size: 1.2rem;
  font-weight: 800;
  cursor: pointer;
  span {
    color: ${props => props.theme.line};
  }
`

export const Menu = styled.div`
  position: relative;
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    li {
      margin-right: 0.6rem;
      &:nth-child(3) {
        margin-right: 0;
      }
      a {
        position: relative;
        font-family: var(--fontTitle);
        font-size: 1.2rem;
        &::after {
          content: "";
          position: absolute;
          display: block;
          width: 0px;
          height: 2px;
          margin: auto;
          background: transparent;
          transition: width .3s ease, background-color .3s ease;
        }
        &:hover::after {
          background: ${props => props.theme.line};
          width: 100%;
        }
      }
    }
  }
  svg {
    fill: ${props => props.theme.subtext}
  }
`