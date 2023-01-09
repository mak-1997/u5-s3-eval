import React from "react";
import Link from "next/link";
import { Box, Container } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box border="1px solid" marginBottom="5" padding="3">
      <Container display="flex" justifyContent={"space-around"} >
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
      </Container>
    </Box>
  );
};

export default Navbar;
