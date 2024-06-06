import {
    FormControl,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    useDisclosure,
  } from '@chakra-ui/react'

  import { HiEye, HiEyeOff } from 'react-icons/hi'
  
  export const PasswordField = (({setPassword}) => {

    const { isOpen, onToggle } = useDisclosure()

    const onClickReveal = () => {
      onToggle()
    }
  
    return (
      <FormControl>
        <FormLabel htmlFor="password">Password</FormLabel>
        <InputGroup>
          <InputRightElement>
            <IconButton
              variant="text"
              aria-label={isOpen ? 'Mask password' : 'Reveal password'}
              icon={isOpen ? <HiEyeOff /> : <HiEye />}
              onClick={onClickReveal}
            />
          </InputRightElement>
          <Input
          onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            type={isOpen ? 'text' : 'password'}
            autoComplete="current-password"
            required
          />
        </InputGroup>
      </FormControl>
    )
  })
  
  PasswordField.displayName = 'PasswordField'