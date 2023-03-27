import React from "react";
import { Text, Grid, GridItem } from "@chakra-ui/react";
import Fouani from "../Images/Founi.jpg";
import Florintech from "../Images/Florintech.jpg";
import Workhen from "../Images/workhen.jpeg";
import Primetek from "../Images/primetek.jpeg";
import Itmann from "../Images/itmann.jpeg";
import Command from "../Images/command.jpeg";

const Experience = () => {
  return (
    <>
      <Grid
        gridTemplateColumns={"1fr 1fr 1fr"}
        gap="10"
        p="10"
        m="auto"
        w="100%"
      >
        <GridItem pl="10">
          <img src={Workhen} alt="workhen" className="workImg" />
          <Text fontSize="2xl" color="#7bdcb5">
            Software Developer (Intern)
          </Text>
          <Text as="u" fontSize="xl" color="#fff">
            Workhen – Lagos, Nigeria
          </Text>
          <Text fontSize="sm" color="#7bdcb5">
            Dec 2022 - Present
          </Text>
        </GridItem>
        <GridItem pl="5">
          <img src={Florintech} alt="florintech" className="workImg" />
          <Text fontSize="2xl" color="#7bdcb5">
            Software Developer - Trainee
          </Text>
          <Text as="u" fontSize="xl" color="#fff">
            Florintech Computer College – Lagos, Nigeria
          </Text>
          <Text fontSize="sm" color="#7bdcb5">
            March 2022 – Nov 2022
          </Text>
        </GridItem>
        <GridItem>
          <img src={Primetek} alt="primetek" className="workImg" />
          <Text fontSize="2xl" color="#7bdcb5">
            Personal Assistant to the MD
          </Text>
          <Text as="u" fontSize="xl" color="#fff">
            Primetek Global Ventures – Lagos, Nigeria
          </Text>
          <Text fontSize="sm" color="#7bdcb5">
            Jun 2021 – Jan 2022
          </Text>
        </GridItem>
        <GridItem pl="10">
          <img src={Fouani} alt="fouani" className="workImg" />
          <Text fontSize="2xl" color="#7bdcb5">
            Customer Care Representative
          </Text>
          <Text as="u" fontSize="xl" color="#fff">
            Fouani Nigeria Limited - Lagos, Nigeria
          </Text>
          <Text fontSize="sm" color="#7bdcb5">
            Jan 2020 - Jun 2021
          </Text>
        </GridItem>
        <GridItem pl="5">
          <img src={Itmann} alt="itmann" className="workImg" />
          <Text fontSize="2xl" color="#7bdcb5">
            Customer Care Representative
          </Text>
          <Text as="u" fontSize="xl" color="#fff">
            ITMANN Consulting – Lagos, Nigeria
          </Text>
          <Text fontSize="sm" color="#7bdcb5">
            Nov 2019 - Aug 2020
          </Text>
        </GridItem>
        <GridItem>
          <img src={Command} alt="command" className="workImg" />
          <Text fontSize="xl" color="#7bdcb5">
            National Youth Service Corp (NYSC)
          </Text>
          <Text as="u" fontSize="xl" color="#fff">
            CDSS, Ojo Cantonment – Lagos, Nigeria
          </Text>
          <Text fontSize="sm" color="#7bdcb5">
            Aug 2018 - July 2019
          </Text>
        </GridItem>
      </Grid>
    </>
  );
};

export default Experience;
