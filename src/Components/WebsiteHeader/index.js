import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';
import WebsiteLogo from '../../Images/logoro.png'
const WebsiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
            <img src={WebsiteLogo} />
        </NavbarBrand>
      </Navbar>
    </div>
  );
}

export default WebsiteHeader;