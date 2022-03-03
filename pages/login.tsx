import React, { useRef } from "react";
import { withPublic } from "../src/hook/route";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  IconButton,
  useColorMode,
  Heading,
  Text,
  Link,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button,
} from "@chakra-ui/react";

const Login = ({ auth }) => {
  const { loginWithGoogle, signup, login } = auth;

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <Flex minHeight="100vh" width="full" align="center" justifyContent="center">
      <Box borderWidth={1} px={4} width="full" maxWidth="500px" borderRadius={4} textAlign="center" boxShadow="lg">
        <ThemeSelector />
        <Box p={4}>
          <Box textAlign="center">
            <Heading>Sign In to Your Account</Heading>
            <Text>
              Or <Link color="teal.500">Create a New One!</Link>
            </Text>
          </Box>
          <Box my={8} textAlign="left">
            <form>
              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type="email" placeholder="Enter your email address" ref={emailRef} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="Enter your password" ref={passwordRef} />
              </FormControl>

              <Stack isInline justifyContent="space-between" mt={4}>
                <Box>
                  <Checkbox>Remember Me</Checkbox>
                </Box>
                <Box>
                  <Link color={`${"teal"}.500`}>Forgot your password?</Link>
                </Box>
              </Stack>
              <Button width="full" mt={4} onClick={() => login(emailRef.current.value, passwordRef.current.value)}>
                Login
              </Button>
              <Button width="full" mt={4} onClick={() => signup(emailRef.current.value, passwordRef.current.value)}>
                Signup
              </Button>
              <Button width="full" mt={4} onClick={loginWithGoogle}>
                Login with Google
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

const ThemeSelector = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box textAlign="right" py={4}>
      <IconButton
        aria-label="ToggleDarkMode"
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
      />
    </Box>
  );
};

export default withPublic(Login);
