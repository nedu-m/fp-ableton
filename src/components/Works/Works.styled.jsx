import styled from 'styled-components';

export const WorkContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 0.2rem;
  }
`;

export const WorkImageContainer = styled.section`
  grid-column: 1/5;
  grid-row: 1/2;
  padding-left: 4.8rem;

  @media (max-width: 768px) {
    padding: 1rem 1rem 0.1rem 1rem;
  }
`;

export const WorkImage = styled.img`
  order: 1;
  width: 50vw;
  border: 0;
  grid-row-start: 1;

  @media (max-width: 768px) {
    width: calc(100% + 60vw);
  }
`;

export const WorkDescriptionContainer = styled.div`
  grid-column: 7/10;
  padding: 0.2rem 0.3rem 2rem 0.97rem;

  @media (max-width: 768px) {
    grid-column: 1/10;
  }
`;

export const WorkDescription = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  font-family: "Outfit", sans-serif;
  color: #fff;
  text-align: start;

  @media (max-width: 768px) {
    text-justify: end;
    font-size: calc(1.8rem - 1.5vw);
    inline-size: 100%;
    margin: 1rem 0.5rem 1.9rem 0.7rem;
    line-height: 1.7rem;
    letter-spacing: calc(normal + 0.2rem);
  }
`;