import React from 'react';
import {Box,Container,Image,Text,VStack, Button, Center,Divider,Link} from '@chakra-ui/react';


const Home = ({gitData}) => {
    const {login,avatar_url,name,bio,followers,following,public_repos} = gitData;
  return (
    <Box display="flex" >
        <Container border="1px solid">
            <Box display="flex" justifyContent={"center"} >
                <Image src={avatar_url} alt="Mayank Singh"  border="1px solid" borderRadius={"50%"} />
            </Box>
            <VStack margin="3">
                <Text as="b" > {login} </Text>
                <Text as="b" > {name} </Text>
                <Text  > {bio} </Text>
            </VStack>
            <Box display="flex" justifyContent={"space-evenly"} >
                <Text as="b">Followers : {followers}</Text>
                <Text as="b">Following : {following}</Text>
                <Text as="b">Public Repositories : {public_repos}</Text>
            </Box>
            <Container  width="55%"  display="flex" textAlign={"center"} >
                <Text> Full-stack Developer | JavaScript | Typescript | NodeJS | ReactJS | HTML | CSS | Chakra-UI </Text>
            </Container>
            <Center display="flex" justifyContent={"space-around"} margin="3">
                <Button>Resume</Button>
                <Button>Follow</Button>
            </Center>
        </Container>
        <Container border="1px solid" >
            <Text as="b" fontSize={"3xl"} >Education</Text>
            <Box display={"flex"} flexDirection="column" textAlign={"left"} >
                <Text as="b" >Masai School, Bangluru</Text>
                <Text as="b" fontStyle={"italic"}>Full Stack Web Development</Text>
                <Text> May 2022 - March 2023 </Text>
            </Box>
            <Divider/>
            <Box display={"flex"} flexDirection="column" textAlign={"left"} >
                <Text as="b" >GLA University, Mathura</Text>
                <Text as="b"fontStyle={"italic"} >Batchelor of Technology in Mechanical Engineering</Text>
                <Text> May 2014 - June 2018 </Text>
            </Box> 
            <Divider/>
            <Box display={"flex"} flexDirection="column" textAlign={"left"} >
                <Text as="b" >DMA, Varanasi</Text>
                <Text as="b" fontStyle={"italic"}>PCM</Text>
                <Text> May 2013 - May 2014 </Text>
            </Box>

            
        </Container>
    </Box>
  )
}

export const getStaticProps = async () => {
    let res = await fetch("https://api.github.com/users/mak-1997");
    let data = await res.json();

    return {
        props : {
            gitData : data,
        }
    }
}

export default Home