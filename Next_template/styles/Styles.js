import styled from "styled-components";

export const MainBox = styled.div`
  min-height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  border: 5px solid ${(props) => props.theme.bordercolor};
  //
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border-radius: 10px;
  font-size: 2rem;
  text-shadow: 5px 5px 5px ${(props) => props.theme.textshadowcolor};
`;

export const FooterBox = styled.div`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
`;

export const FooterText = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export const Logo = styled.span`
  height: 1em;
  margin-left: 0.5rem;
  background-color: red;
`;
