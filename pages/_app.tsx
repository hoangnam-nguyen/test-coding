import "../styles/globals.css";
import "../src/config/firebase.config";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "../src/hook/auth";
import AuthStateChanged from "../src/layout/AuthStateChanged";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <AuthProvider>
        <AuthStateChanged>
          <Component {...pageProps} />
        </AuthStateChanged>
      </AuthProvider>
    </ChakraProvider>
  );
};

export default MyApp;
