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
          <Text py="2" fontSize="4xl" className="name">
            My Name Is Nnadiukwu, Cynthia <br /> Amarachi
          </Text>
          <Text fontSize="2xl" className="hello">
            I am a Software Engineer
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
