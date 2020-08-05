import styled, { css } from "styled-components"
import {motion} from 'framer-motion'

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  width: auto;
  height: 100%;
  @media(min-width: 1024px){
    max-width: 960px;
  }
  @media(min-width: 1216px){
    max-width: 1152px;
  }
  @media(min-width: 1408px){
    max-width: 1244px;
  }

  ${props => 
    props.fluid && 
    css`
      padding: 0;
      margin: 0;
      max-width: 100%;
  `}
`

export const Section = styled.section`
  padding: 2rem 0;  
`

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  @media (max-width: 414px) {
    flex-direction: column;
  }
  
  ${props => 
    props.spaceBetween && 
    css`
      justify-content: space-between;
  `}

  ${props => 
    props.footer && 
    css`
      p {
        font-size: 1rem;
        color: #fff;
        @media (max-width: 320px) {
          font-size: 0.8rem;
        }
      }
      ul {
        display: flex;
        font-size: 1rem;
        li {
          margin-right: 10px;
          svg {
            fill: #fff;
            @media (max-width: 320px) {
              width: 24px;
              height: 24px;
            }
          }
        }
     }
  `}
`

export const Grid = styled.div`
  display: grid;
  grid-row-gap: 10px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
  }
  ${props => 
    props.about && 
    css`
    position: relative;
    padding: 3rem 0;
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 10px;
    }
  `}
  ${props => 
    props.info && 
    css`
    padding-top: 120px;

    svg {
      fill: ${props => props.theme.text};
      width: 24px;
      height: 24px;
    }
    h2 {
      margin: 0;
      font-size: 1.6rem;
      @media (max-width: 414px) {
        font-size: 1.3rem;
      }
    }
    p {
      color: ${props => props.theme.subtext};
      font-size: 1rem;
    }
    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 10px;
    }
  `}
`

export const SectionTitle = styled.div`
  position: relative;
  font-family: var(--fontTitle);
  font-size: 1.6rem;
  padding-bottom: 2rem;
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 0px;
    height: 2px;
    margin: auto;
    width: 40px;
    background: ${props => props.theme.line};
    margin-top: 0.4rem;
  }

  ${props => 
    props.custom && 
    css`
      color: #fff;
      text-align: center;
      &::after {
        background: none;
      }
  `}
`

export const ToggTheme = styled.div`
  position: absolute;
  top: 120px;
  right: 0;
  cursor: pointer;
  transform: rotate(90deg);
  font-size: 1.4rem;
  font-family: var(--fontTitle);
  color: ${props => props.theme.subtext};
  @media (max-width: 320px) {
    display: none;
  }
`

export const Footer = styled.footer`
  padding: 1rem 0;
  background: #343837;  
`

// Not found 
export const NotFound = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  margin-bottom: 296px;
  @media (max-width: 768px) {
    margin-bottom: 120px;
  }
`

export const NotFoundTitle = styled(motion.h1)`
  position: absolute;
  bottom: -320px;
  left: 0;
  color: ${props => props.theme.text};
  pointer-events: none;
  @media (max-width: 768px) {
    bottom: -120px;
  }
`

export const HeadLine = styled(motion.span)`
  display: block;
  font-size: 20vw;
  font-weight: 900;
  line-height: 1;
  font-family: var(--fontTitle);
`

