import * as React from "react";
import { Button } from "@chakra-ui/core";
import { Stack } from "@chakra-ui/core";
import {
  chakra,
  DarkMode,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/system";
import Head from "next/head";
import { PrismaClient } from "@prisma/client";

function Switcher() {
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("light-man", "dark-man");
  return <button onClick={toggleMode}>Current mode: {text}</button>;
}

async function TotalSummary() {
  const prisma = new PrismaClient();
  const allUsers = await prisma.hubstaff_users.findMany();
  console.log(allUsers);

  // const [bool, setBool] = React.useState(false);
  return (
    <>
      <div> {allUsers.length} Users. </div>
      <br />
    </>
  );
}

const Home = () => (
  <div className="container">
    <Head>
      <title>Weenggs CMS</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <chakra.div fontSize="20px">Welcome to chakra</chakra.div>

      <chakra.div bg="gray.800" padding={4}>
        <DarkMode>
          <Button colorScheme="green">Welcome</Button>
        </DarkMode>
      </chakra.div>

      {/* <TotalSummary /> */}

      <Switcher />

      <Stack direction="row" spacing="40px">
        <div>{"Something will be printed here.."}</div>
      </Stack>
    </main>
  </div>
);

export default Home;
