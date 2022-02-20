import { ChakraProvider } from "@chakra-ui/react";
import UserProvider from "../context/userContext";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <UserProvider>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </UserProvider>
    );
}
