import styled from "styled-components";

function NavBar() {
  return (
    <Wrapper>
      {" "}
      <Nav>
        <Content>
          {" "}
          <h2>The Star Wars Characters</h2>
        </Content>
      </Nav>
    </Wrapper>
  );
}

export default NavBar;

const Wrapper = styled.div`
  width: 100%;

  background: #3d4348;
  color: #fde44d;
  font-size: 18px;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
`;

const Content = styled.div`
  display: flex;
  margin-left: 1.4em;
  align-items: center;

  @media (max-width: 920px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
