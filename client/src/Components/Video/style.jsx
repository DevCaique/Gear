import styled from "styled-components";

import { SIZES } from "../../GlobalStyle";

export const VideoS = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  & > img {
    margin-bottom: ${SIZES.paddingSmallest};
  }
`;
