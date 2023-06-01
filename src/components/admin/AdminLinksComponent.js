import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";



const AdminLinksComponent = () => {

  return (
    <Navbar bg="light" variant="light">
      <Nav className="flex-column">
        
        <LinkContainer to="/admin/products">
          <Nav.Link>Products</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/admin/users">
          <Nav.Link>Users</Nav.Link>
        </LinkContainer>

      </Nav>
    </Navbar>
  );
};

export default AdminLinksComponent;
