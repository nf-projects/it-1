import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import checkName from '../components/authcheck/name';
import checkEmail from '../components/authcheck/email';
import checkPassword from '../components/authcheck/password';

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false); // for "toggle password"

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [firstNameValid, setFirstNameValid] = useState(false);
  const [lastNameValid, setLastNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const handleSubmit = () => {
    if(firstNameValid && lastNameValid && emailValid && passwordValid) {
      alert("Success!")
    } else {
      alert("Please check your inputs!")
    }
  }

  function updateFirstName (val) {
    setFirstName(val)
    setFirstNameValid(checkName(val)) 
  }

  function updateLastName (val) {
    setLastName(val)
    setLastNameValid(checkName(val))
  }  

  function updateEmail (val) {
    setEmail(val)
    setEmailValid(checkEmail(val))
  }    

  function updatePassword (val) {
    setPassword(val)
    setPasswordValid(checkPassword(val))
  }  

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Anmelden
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Wilkommen zu meinem IT-Projekt
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Vorname</FormLabel>
                  <Input
                  type="text" 
                  value={firstName}
                  onChange={(e) => updateFirstName(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Nachname</FormLabel>
                  <Input
                  type="text" 
                  value={lastName}
                  onChange={(e) => updateLastName(e.target.value)}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email Addresse</FormLabel>
              <Input
              type="email" 
              value={email}
              onChange={(e) => updateEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Passwort</FormLabel>
              <InputGroup>
                <Input
                type={showPassword ? 'text' : 'password'} 
                value={password}
                onChange={(e) => updatePassword(e.target.value)}
                />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleSubmit}
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Anmelden 
              </Button>
              {!firstNameValid ? <Text as='b' color='tomato' >Invalid First Name!</Text> : null}
              {!lastNameValid ? <Text as='b' color='tomato' >Invalid Last Name!</Text> : null}
              {!emailValid ? <Text as='b' color='tomato' >Invalid Email</Text> : null}
              {!passwordValid ? <Text as='b' color='tomato' >Invalid Password</Text> : null}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}