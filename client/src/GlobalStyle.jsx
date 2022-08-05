import { createGlobalStyle } from "styled-components";

export const SIZES = {
  paddingLargest: "10rem",
  paddingLarge: "8rem",
  paddingMedium: "6rem",
  paddingNormal: "4rem",
  paddingSmall: "2rem",
  paddingSmallest: "1rem",
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  body{
    background-color: #262626;
    line-height: 1.6;
    font-size: .8rem;
    letter-spacing: 1px;
  }
  ul{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img{
    width: 100%;
    height: auto;
  }
`;
