import { createGlobalStyle} from "styled-components";
import styled from "styled-components";

 const GlobalStyle = createGlobalStyle`
  body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
    background: #272B30;
    color:#f1f1f1;
  
  }
  
`;

export default GlobalStyle;

export const Container = styled.div`
  max-width: 1200px;
  padding: 40px 0;
  color: #f1f1f1;
  margin: 0 auto;

`;
