import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'
import { ProfileImage } from './profileImage'
import { useState } from 'react'

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Navbar
        color="faded"
        light
        expand="md"

      >
        <NavbarBrand>
          <ProfileImage/>
        </NavbarBrand>
        <NavbarToggler
          className="me-2"
          onClick={() => setIsOpen(!isOpen)}
        />
        <Collapse
          navbar
          isOpen={isOpen}
        >
          <Nav navbar>
            <NavItem
              active={props.home !== undefined}
            >
              <NavLink
                href="/"
                active={props.home !== undefined}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem
              active={props.home === undefined}
            >
              <NavLink
                href="/images"
                active={props.home === undefined}
              >
                Image Gallery
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export {
  Navigation
}
