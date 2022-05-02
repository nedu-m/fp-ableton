import styled from 'styled-components'

export const Container = styled.div`
  padding: 0;
  margin: 0 1.43rem;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0;
    margin: 0 0.82rem;
  }
`;