import React from "react";
import {
  Box,
  Container,
  Image,
  Text,
  VStack,
  HStack,
  Button,
  Center,
  Divider,
} from "@chakra-ui/react";

const projects = ({ repoData }) => {
  return (
    <Box
      dispaly="flex"
      justifyContent={"center"}
      flexDirection="column"
      textAlign={"center"}
    >
      <Text as="b" fontSize={"4xl"}>
        Projects
      </Text>
      <Container>
        {repoData.items.map((elem) => {
          return (
            <Box key={elem.id} border="1px solid">
              <Text as="b"> Nme : {elem.name} </Text>
              <HStack dispaly="flex" justifyContent={"space-between"} padding="5" >
                <Box width="fit-content" >
                  <Text as="b">Stars : {elem.stargazers_count} </Text>
                </Box>
                <Box width="fit-content" >
                  <Text as="b">Forks : {elem.forks_count} </Text>
                </Box>
              </HStack>
              <Text as="b">Language : {elem.language} </Text>
            </Box>
          );
        })}
      </Container>
    </Box>
  );
};

export const getStaticProps = async () => {
  let res = await fetch(`https://api.github.com/search/repositories?q=user:mak-1997+fork:true&sort=updated&per_page=10&type=Repositories`);
  let data = await res.json();

  return {
    props: {
      repoData: data,
    },
  };
};

export default projects;
