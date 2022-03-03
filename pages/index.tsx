import Head from "next/head";
import Link from "next/link";
// import styles from "../styles/Home.module.css";
import DynamicText from "components/DynamicText";
import { Flex, Heading, Input, Button } from "@chakra-ui/react";
import { useRef } from "react";
import { withProtected } from "../src/hook/route";

interface RefObject {
  changeValue: (newValue) => void;
}

const Home = ({ auth }) => {
  const childRef = useRef<RefObject>(null);
  const { logout } = auth;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    childRef.current.changeValue(e.target.value);
  };

  return (
    <Flex direction="column" justify="center" align="center" px="0.5rem" py="0" minHeight="100vh">
      <Head>
        <Heading as="h1">Coding Test</Heading>
        <Link href="/favicon.ico"></Link>
      </Head>

      <Flex grow="2" justify="center" align="center">
        <Button w="6rem" mx={5} onClick={logout}>
          Logout
        </Button>
        <Link href="/blog">
          <Button w="6rem" mx={5}>
            Blog
          </Button>
        </Link>
      </Flex>
      <Flex direction="column" grow="1" px="0" py="5rem" justify="center" align="center">
        <DynamicText ref={childRef} />
        <Input onChange={onChange} />
      </Flex>
    </Flex>
  );
};

export default withProtected(Home);
