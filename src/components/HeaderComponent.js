import {
  Navbar,
  Container,
} from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";
// import { Link, useNavigate } from "react-router-dom";

const HeaderComponent = () => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="/">BEST ONLINE SHOP</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
