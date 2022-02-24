import React, { useState } from "react";
import "./Header.css";
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Media,
} from "react-bootstrap";

const Header = () => {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  const [dropShow, setDropShow] = useState(false);
  const showCoffee = (e) => {
    setDropShow(!dropShow);
  };
  const hideCoffee = (e) => {
    setDropShow(false);
  };
  return (
    <>
      <div className="post_header">
        <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
          <Container fluid>
            <ul className="navbar-nav">
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  <NavDropdown
                    title="Admin"
                    alignRight
                    id="collasible-nav-dropdown"
                    show={show}
                    onMouseEnter={showDropdown}
                    onMouseLeave={hideDropdown}
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Coffee Web
                </a>
              </li>
              <li className="nav-item active coffee-link">
                <a className="nav-link " href="#">
                  Coffee Quotes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Coffee News Feeds
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Global Raw Coffee Prices
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Global Differentials
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Global Freight Rates
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <NavDropdown
                    title="Global Trade Box"
                    alignRight
                    id="collasible-nav-dropdown"
                    show={dropShow}
                    onMouseEnter={showCoffee}
                    onMouseLeave={hideCoffee}
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Support
                </a>
              </li>

              {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li> */}
            </ul>
            {/* <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <FormGroup className="mb-0">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Search" type="text" />
              </InputGroup>
            </FormGroup>
          </Form> */}

            {/* <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
                ASDFV
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="..."
                      src={
                        require("../../assets/img/theme/team-4-800x800.jpg")
                          .default
                      }
                    />
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold">
                      Jessica Jones
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
            </UncontrolledDropdown>
          </Nav> */}
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
