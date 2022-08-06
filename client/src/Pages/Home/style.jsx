// Imports
import styled from "styled-components";

// Styles
import { SIZES } from "../../GlobalStyle";

// ==================================================================================================== //

// Section
export const Section = styled.main`
  margin-top: ${SIZES.largest};
  color: white;
`;

// Video Section
export const VideoSection = styled.section`
  margin-top: ${SIZES.paddingMedium};
  padding-inline: ${SIZES.paddingNormal};
  display: grid;
  gap: ${SIZES.paddingNormal} ${SIZES.paddingSmall};
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 598px) {
    grid-template-columns: 1fr;
    gap: ${SIZES.paddingSmall} ${SIZES.paddingSmallest};
  }
`;
