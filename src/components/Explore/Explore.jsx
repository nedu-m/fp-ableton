import {
  ExploreContainer,
  ExploreContent
} from './Explore.styled.jsx'

import {
  ExploreButtonContainer,
  ExploreButtonLink,
  ButtonIcon
} from '../Button/Button';

const Explore = () => {
  return (
    <ExploreContainer>
      <ExploreContent>
        Explore a few of our most impactful projects
      </ExploreContent>
      <ExploreButtonContainer>
        <ExploreButtonLink>
          Our works
          <ButtonIcon />
        </ExploreButtonLink>
      </ExploreButtonContainer>
    </ExploreContainer>
  )
};

export default Explore;