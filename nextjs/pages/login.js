import {AspectRatio, Button, Container, Heading, Image, Input, Link, Text, VStack,} from '@chakra-ui/react';
import {AsYouTypeFormatter, PhoneNumberUtil, PhoneNumberFormat as PNF} from 'google-libphonenumber';

import {getAuth, RecaptchaVerifier, signInWithPhoneNumber} from "firebase/auth";
import {useCallback, useState} from "react";
import {createFirebaseApp} from "../firebase/clientApp";
import {useUser} from "../context/userContext";
import {useRouter} from "next/router";
const parse = n => {
  const phoneUtil = new PhoneNumberUtil.getInstance();
  const number = phoneUtil.parseAndKeepRawInput(n, "US");
  return phoneUtil.format(number, PNF.E164);
}
export default function Start() {
  // const phoneUtil = PhoneNumberUtil.getInstance();
  // TODO - make a theme file
  // titles are black by default
  const textColor = 'gray.400';
  const accentColor = '#EE9F29';
  const complementColor = "#187589";
  const focusedColor = '#C9841D';
  const [phoneNum, setPhoneNum] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [formatter, setFormatter] = useState(new AsYouTypeFormatter("US"))
  const [confirmation, setConfrimation] = useState(false);
  const [code, setCode] = useState("")
  const app = createFirebaseApp()
  const auth = getAuth(app)


  const { loadingUser, user } = useUser();
  const router = useRouter();
  if(user) {
    router.replace("/start");
  }
  const onSubmit = useCallback(async () => {
    // if(!allowSignIn) return false;
    if(confirmation){
      const result = await window.confirmationResult.confirm(code);
      console.log(result);
      return;
    }
    setIsLoading(true)
    const appVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
    }, auth);

    console.log("app verifier")
    const confirmationResult = await signInWithPhoneNumber(auth, parse(phoneNum), appVerifier, {})
    console.log("THEN");

    setIsLoading(false)
    // SMS sent. Prompt user to type the code from the message, then sign the
    // user in with confirmationResult.confirm(code).
    window.confirmationResult = confirmationResult;
    setConfrimation(true)
    console.log(confirmationResult)
  }, [phoneNum, code, confirmation])
  // useEffect(() => {
  //   console.log("CALLBACK listener")
  //   window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
  //     'size': 'invisible',
  //     'callback': (response) => {
  //       // reCAPTCHA solved, allow signInWithPhoneNumber.
  //       console.log("CALLBACK verifier")
  //       setIsLoading(false);
  //     }
  //   }, auth);
  // }, [])
  return (
    <Container maxWidth={500} display="flex" justifyContent="center">
      <VStack textAlign={"center"} my={10} w="fit-content" display="flex">
        {/* Logo, Title, Subtitle */}
        <AspectRatio my={2} ratio={1} w={24}>
          <Image
            src="./images/honk_logo.png"
            alt="honk"
          />
        </AspectRatio>
        <Heading size="4xl">
          Honk!
        </Heading>
        <Heading color={textColor} fontWeight="regular" size="lg">
          Focused, Friendly Learning.
        </Heading>

        {/* Phone Number Input */}
        {!confirmation && <Container p={0} mb={10} w="full">
          <Text py={3}
                fontSize="lg" fontWeight="semibold"
                mt={10} textAlign={"left"}
          >
            Enter Your Phone Number
          </Text>
          <Input mb={4} onKeyPress={e => {
            console.log(e.key)
            setPhoneNum(formatter.inputDigit(e.key))
          }}
                 value={phoneNum}
                 placeholder={"763-123-4568"} w={"full"}/>


        </Container>
        }
        {confirmation &&  <Container p={0} mb={10} w="full">
          <Text py={3}
                fontSize="lg" fontWeight="semibold"
                mt={10} textAlign={"left"}
          >
            Enter Your Security Code
          </Text>
          <Input mb={4} onChange={e => setCode(e.currentTarget.value)}
                 value={code}
                 placeholder={"123456"} w={"full"}/>

        </Container>
        }

        <Button
          alignSelf={"flex-end"}
          bg={accentColor}
          color={'white'}
          my={10} px={8}
          size='md' fontSize="lg"
          _hover={{bg: focusedColor}}
          _focus={{ring: 3, ringColor: "orange.200"}}
          onClick={onSubmit}
          isLoading={isLoading}
          id={"sign-in-button"}
        >
          Log In
        </Button>
        <Link
          py={4} fontSize="lg"
          color={textColor}
          textDecoration="underline"
          _hover={{color: complementColor}}
        >
          (Or enter a room link if you have one!)
        </Link>
      </VStack>
    </Container>
  )
}
