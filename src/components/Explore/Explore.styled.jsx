import styled from 'styled-components'
import {
  BgTextContainer,
  BgTextContent,
} from '../BackgroundText/BackgroundText.styled'

export const ExploreContainer = styled(BgTextContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 0;
  padding-top: 0;

  @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
    margin-left: -1rem;
  }
`

export const ExploreContent = styled(BgTextContent)`
  grid-area: 1 / 1 / 2 / 2;
  color: #fff;
  font-size: 2.6rem;
  font-weight: 400;
  font-family: 'Outfit', sans-serif;
  inline-size: calc(46vw);

  @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
    inline-size: calc(100% - 2rem);
    font-size: clamp(1.6rem,6vw,2rem);
    grid-area: 2 / 2 / 4 / 4;
  }
`