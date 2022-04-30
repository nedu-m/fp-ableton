import styled from 'styled-components'

export const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 0 10px;
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0 30px;
  }
`;