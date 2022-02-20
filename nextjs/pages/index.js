import io from "socket.io-client";
import { Heading, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import PageLayout from "../components/Layout/PageLayout";
import { useUser } from "../context/userContext";

export default function Home() {
    const [socket, setSocket] = useState(null);

    // Our custom hook to get context values
    const { loadingUser, user } = useUser();

    useEffect(() => {
        if (!loadingUser) {
            // You know that the user is loaded: either logged in or out!
            console.log(user);
        }
        // You also have your firebase app initialized
    }, [loadingUser, user]);

    useEffect(() => {
        const newSocket = io("/express/socket.io");
        setSocket(newSocket);

        newSocket.on("message", (msg) => setMessages((pv) => [...pv, msg]));

        return () => newSocket.close();
    }, []);
    return (
        <PageLayout>
            <VStack justifyContent={"center"} alignItems={"center"} minH={"100vh"} bg={"pink.300"}>
                <Heading>Hello, world!</Heading>
            </VStack>
        </PageLayout>
    );
}
