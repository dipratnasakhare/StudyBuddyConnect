import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
} from "@chakra-ui/react";

import { AuthSignInButton } from "../../../components/AuthSignInButton";

// import { useDispatch } from 'react-redux'

import { GoogleAuthProvider, signInWithPopup, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { auth } from "../GoogleAuth/GoogleSignIn";
import { useState } from "react";
// import { googleAuthenticate } from "../../../redux/Admin/AdminAction";

export const SignIn = () => {
  const [phoneNumber, setPhoneNumber] = useState(''); //+919109760078
  // const [code, setCode] = useState("");
  // const [verificationCode, setVerificationCode] = useState("");

  const signInWithPhoneNumberAuth = async () => {
    

// const dispatch = useDispatch()

    // const appVerifier = new RecaptchaVerifier("recaptcha", {}, auth);
  
    // try {
    //   const result = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
    //   console.log(result);
    // } catch (error) {
    //   console.log(error);
    // }

  };

  const logGoogleUser = async () => {

    // dispatch(googleAuthenticate())

    const provider = await new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container m={"auto"} maxW="lg" px={{ base: "0", sm: "8" }} p={"5"}>
      <Stack mt={"-6"} spacing="8">
        <Stack
          borderRadius={{ base: "none", sm: "xl" }}
          backdropFilter="auto"
          backdropBlur="6px"
          spacing="6"
        ></Stack>

        <Box
          backdropFilter="auto"
          backdropBlur="6px"
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "transparent", sm: "bg.surface" }}
          boxShadow={{ base: "none", sm: "md" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="number">Phone Number</FormLabel>
                <Input
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  id="number"
                  type="number"
                />
              </FormControl>
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="text" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button
                onClick={signInWithPhoneNumberAuth}
                _hover={"none"}
                bg={"#3182ce"}
              >
                Sign in
              </Button>
              <HStack>
                <Divider />
              </HStack>
              <AuthSignInButton logGoogleUser={logGoogleUser} />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};
