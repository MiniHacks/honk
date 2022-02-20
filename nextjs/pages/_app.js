import { ChakraProvider } from "@chakra-ui/react";
import UserProvider from "../context/userContext";
import {Head} from "next/document";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <UserProvider>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </UserProvider>
    );
}
