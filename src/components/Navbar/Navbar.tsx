// Navbar.tsx

import React from "react";
import { styled } from "@mui/material";
import { NavItem } from "../../Types";

const NavList = styled("ul")({
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  alignItems: "center",
  gap: "20px",
});

const NavLink = styled("a")({
  textDecoration: "none",
  color: "#0A1849",
  fontFamily: "Poppins",
  fontWeight: "bold",
  position: "relative",
  transition: "background-size 400ms",
  background: `
    linear-gradient(
      to right,
      rgba(100, 200, 200, 1),
      rgba(100, 200, 200, 1)
    ),
    linear-gradient(
      to right,
      rgba(255, 0, 0, 1),
      rgba(255, 0, 180, 1),
      rgba(0, 100, 200, 1)
    )`,
  backgroundSize: "100% 3px, 0 3px",
  backgroundPosition: "100% 100%, 0 100%",
  backgroundRepeat: "no-repeat",

  "&:hover": {
    backgroundSize: "0 3px, 100% 3px",
  },
});

interface NavbarProps {
  navItems: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
  return (
    <nav>
      <NavList>
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink href={item.path}>{item.name}</NavLink>
          </li>
        ))}
      </NavList>
    </nav>
  );
};

export default Navbar;
