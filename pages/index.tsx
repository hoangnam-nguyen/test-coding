import Head from "next/head";
// import styles from "../styles/Home.module.css";
import DynamicText from "../components/DynamicText";

import { Flex, Heading, Link, Input } from "@chakra-ui/react";

const Home = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <Flex direction="column" justify="center" align="center" px='0.5rem' py='0' minHeight='100vh'>
      <Head>
        <Heading as='h1'>Coding Test</Heading>
        <Link href="/favicon.ico" ></Link>
      </Head>

      <Flex direction='column' grow='1' px='0' py='5rem' justify='center' align='center'>
        <DynamicText />
        <Input onChange={onChange} />
      </Flex>
    </Flex>
  );
};

export default Home;
