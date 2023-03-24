import React from "react";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import cynthia from "../Images/cynthia.JPG";

const About = () => {
  return (
    <>
      <Flex align={"start"} justify={"start"} py="20">
        <Box boxSize="sm" mx={20}>
          <img src={cynthia} alt="Cynthia" />
        </Box>
        <Box py="20" px={10}>
          <Text fontSize="4xl" className="hello" textTransform="uppercase">
            Hello Welcome,
          </Text>
          <Text py="2" fontSize="2xl" className="name">
            My Name is Nnadiukwu, Cynthia Amarachi
          </Text>
          <Text fontSize="1xl" className="hello">
            A little about myself, I have hands-on experience contributing to
            building applications <br /> as a front-end engineer intern using
            HTML5, CSS3, SASS, ReactJs, NextJs, Git (Version Control) <br /> and
            open to learning new technology stacks.
          </Text>
          <Button colorScheme="teal" variant="outline" mt="5">
            Download Cv
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default About;
