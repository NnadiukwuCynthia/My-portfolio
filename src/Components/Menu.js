import React from "react";
import { NavLink } from "react-router-dom";
import { Flex, UnorderedList, ListItem } from "@chakra-ui/react";
import Logo from "./Logo";

const Menu = () => {
  return (
    <>
      <Flex px="10" align="center" justify="space-between">
        <UnorderedList className="listItem">
          <ListItem>
            <NavLink to="/about" activeClassName="active" className="NavList">
              About
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/contact" activeClassName="active" className="NavList">
              Contact
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink
              to="/experience"
              activeClassName="active"
              className="NavList"
            >
              Experience
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink
              to="/projects"
              activeClassName="active"
              className="NavList"
            >
              Projects
            </NavLink>
          </ListItem>
        </UnorderedList>
        <Logo />
      </Flex>
    </>
  );
};

export default Menu;
