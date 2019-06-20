import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  Collapse,
  NavLink,
  Input,
  Form
} from "reactstrap";
import "./styles/menu.css";
export default function Menu(props) {
  const [handlename, setHandleName] = useState("");
  const [isopen, setIsOpen] = useState(false);

  const SearchQuery = e => {
    console.log(handlename);
  };

  const InputField = e => {
    e.preventDefault();
    setHandleName(e.target.value);
  };
  return (
    <>
      <Navbar
        color="dark"
        dark
        expand="sm"
        fixed="top"
      >
        <NavbarToggler onClick={() => setIsOpen(!isopen)} />
        <NavbarBrand href="/">React Movie Master</NavbarBrand>
        <Collapse isOpen={isopen} navbar>
          <Nav className="ml-auto" navbar>
            {props.items.map(links => (
              <NavItem key={links}>
                <NavLink href={`/${links}`} className="text-white text-center">
                  {links}
                </NavLink>
              </NavItem>
            ))}
            <NavItem>
              <Form onSubmit={SearchQuery}>
                <Input
                  type="text"
                  name="handlename"
                  className="search-data"
                  value={handlename}
                  onChange={InputField}
                  bsSize="lg"
                  placeholder="Search"
                />
              </Form>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}
