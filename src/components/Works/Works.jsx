import React from "react";
import {
  WorkContainer,
  WorkImageContainer,
  WorkImage,
  WorkDescriptionContainer,
  WorkDescription
} from "./Works.styled";

import {
  ButtonIcon,
  ButtonLink,
  ButtonContainer,
  NewButtonContainer
} from '../Button/Button';

import { worksData } from "./data";

// import firstImage from "../../assets/images/image1.png";
// import secondImage from "../../assets/images/image2.jpg";
// // import thirdImage from "../../assets/images/image3.jpg";

const Works = () => {
  const [tab, setTab] = React.useState(0);

  const handleTab = (index) => {
    setTab(index);
  };

  return (
    <>
      {worksData.map((work, index) => {
        return (
          <WorkContainer
            onLoad={() => handleTab(index)}
            key={work.id}
            isActive={tab === index ? true : false}
          >
            <WorkImageContainer>
              <WorkImage src={work.image} />
            </WorkImageContainer>
            <WorkDescriptionContainer>
              <WorkDescription>{work.description}</WorkDescription>
              <NewButtonContainer>
                <ButtonLink>
                  Learn more
                  <ButtonIcon />
                </ButtonLink>
              </NewButtonContainer>
            </WorkDescriptionContainer>
          </WorkContainer>
        )
      })}
    </>
  )
};

export default Works;