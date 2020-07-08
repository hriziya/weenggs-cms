import * as React from "react";
import { Button } from "@chakra-ui/core";
import { Image } from "@chakra-ui/core";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement
} from "@chakra-ui/core";
import { Stack } from "@chakra-ui/core";
import {
  chakra,
  DarkMode,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/system";
import Head from "next/head";

function Switcher() {
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("light-man", "dark-man");
  return <button onClick={toggleMode}>Current mode: {text}</button>;
}

const InputGrouper = () => {
  const [bool, setBool] = React.useState(false);
  return (
    <>
      <InputGroup maxWidth="400px">
        <InputLeftElement color="gray.300" fontSize="1.2em" children="$23" />
        <Input placeholder="Enter amount" />
        {bool && <InputRightElement children={"C"} />}
      </InputGroup>
      <button onClick={() => setBool(s => !s)}>Add 1Right Element</button>
      <br />
    </>
  );
};

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <chakra.div fontSize="20px">Welcome to chakra</chakra.div>
      <Image
        src="https://bit.ly/sage-adebayo"
        fallbackSrc="https://via.placeholder.com/240"
        fit="cover"
        width="400px"
        height="300px"
      />

      <chakra.div bg="gray.800" padding={4}>
        <DarkMode>
          <Button colorScheme="green">Welcome</Button>
        </DarkMode>
      </chakra.div>

      <InputGroup>
        <InputLeftElement children={"+234"} />
        <Input type="phone" placeholder="Phone number" />
      </InputGroup>

      <InputGrouper />

      <Switcher />

      <Stack direction="row" spacing="40px">
        <div>Welcome home</div>
        <div>Welcome home</div>
        <div>Welcome home3</div>
      </Stack>
    </main>
  </div>
);

export default Home;
