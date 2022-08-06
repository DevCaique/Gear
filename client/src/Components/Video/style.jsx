// Imports
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styles
import { SIZES } from "../../GlobalStyle";

export const VideoS = styled(Link)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  color: white;

  & > img {
    margin-bottom: ${SIZES.paddingSmallest};
  }
`;
