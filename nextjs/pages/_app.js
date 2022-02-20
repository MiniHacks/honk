import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import UserProvider from "../context/userContext";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <UserProvider>
            <SessionProvider session={session}>
                <ChakraProvider>
                    <Component {...pageProps} />
                </ChakraProvider>
            </SessionProvider>
        </UserProvider>
    );
}
