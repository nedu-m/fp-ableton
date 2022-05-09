import { Header, HeroText } from './Hero.styled';
import { Container } from '../../styles/Container.styled';
import {
  ButtonIcon,
  ButtonLink,
  ButtonContainer
} from '../Button/Button';


const Hero = () => {
  return (
    <Container>
    <Header>
      Build. Grow. Serve.
    </Header>
    <HeroText>
      We are investing $3 million over the next three years in our
      Build|Grow|Serve program, created to support and empower Black and
      underrepresented communities.
      </HeroText>
      <ButtonContainer>
        <ButtonLink to="/">Learn More</ButtonLink>
        <ButtonIcon />
      </ButtonContainer>
    </Container>
  )
};

export default Hero;