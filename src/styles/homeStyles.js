import styled from "styled-components"

export const SectionHero = styled.section`
  padding: 120px 0 2rem 0;
  line-height: 0.4;
  font-family: var(--fontTitle);
  p {
    font-size: 1.4rem;
  }
`

export const Location = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  svg {
    fill: var(--red); 
    margin-right: 0.2rem;
  }
`

export const GithubContent = styled.div`
  h3 {
    font-family: var(--fontTitle);
    font-size: 1.5rem;
    @media (max-width: 320px) {
      font-size: 1.2rem;
    }
    @media (max-width: 414px) {
      font-size: 1.3rem;
    }
    a {
      color: ${props => props.theme.text}
    }
  }
  p, span {
    font-size: 1rem;
    @media (max-width: 320px) {
      font-size: 0.8rem;
    }
  }
`