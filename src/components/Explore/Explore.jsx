import {
  ExploreContainer,
  ExploreContent
} from './Explore.styled.jsx'

import {
  WorkButtonContainer,
  ExploreButtonLink,
  ButtonIcon
} from '../Button/Button';

const Explore = () => {
  return (
    <ExploreContainer>
      <ExploreContent>
        Explore a few of our most impactful projects
      </ExploreContent>
      <WorkButtonContainer>
        <ExploreButtonLink>
          Our works
          <ButtonIcon />
        </ExploreButtonLink>
      </WorkButtonContainer>
    </ExploreContainer>
  )
};

export default Explore;