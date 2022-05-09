import React from "react";
import {
  WorkContainer,
  WorkImageContainer,
  WorkImage,
  WorkDescriptionContainer,
  WorkDescription
} from "./Works.styled";

import firstImage from "../../assets/images/image1.png";
// import SecondImage from "../../assets/images/image2.png";
// import thirdImage from "../../assets/images/image3.png";

const Works = () => {
  return (
    <WorkContainer>
      <WorkImageContainer>
        <WorkImage src={firstImage} />
      </WorkImageContainer>
      <WorkDescriptionContainer>
        <WorkDescription>
          In the summer of 2020, we reported our representation data
          and committed to doing so annually. One year later, we are pleased to share an update on our goals,
          our progress, and the work that still needs to be done.
        </WorkDescription>
      </WorkDescriptionContainer>
    </WorkContainer>
  )
};

export default Works;