import { useContext, useEffect, useState } from "react";
import TextInput from "../components/TextInput";
import Heading from "../components/Heading";
import { Container } from "../App.styles";
import DataContext from "../utils/DataContext";
import { Button, HStack, VStack } from "@chakra-ui/react";

function Home() {
  const { firstName, setFirstName, lastName, setLastName } =
    useContext(DataContext);

  const [isInvalid, setIsInvalid] = useState({
    firatName: false,
    lastName: false,
  });
  useEffect(() => {
    console.log(`Full name: ${lastName}, ${firstName}`);
  }, [firstName, lastName]);
  const onChangeHandlerFN = (e) => {
    const val = e.target.value;
    setFirstName(val);
    // console.log(`val == ${val}`);
  };
  const onChangeHandlerLN = (e) => {
    const val = e.target.value;
    setLastName(val);
    // console.log(`val == ${val}`);
  };
  const onSubmitHandler = (e) => {
    setIsInvalid({
      firstName: firstName === "",
      lastName: lastName === "",
    });
  };

  return (
    <Container>
      <Heading>Heading</Heading>
      <HStack align="start" gap="2rem" mb="2rem" width="100%">
        <TextInput
          id="first-name"
          label="First name"
          helperText={isInvalid.firstName && "Please enter your first name"}
          placeholder="Your first name"
          onChange={onChangeHandlerFN}
          value={firstName}
        />
        <TextInput
          id="last-name"
          label="Last name"
          helperText={isInvalid.lastName && "Please enter your last name"}
          placeholder="Your last name"
          onChange={onChangeHandlerLN}
          value={lastName}
        />
      </HStack>
      <Button onClick={onSubmitHandler}>Submit</Button>
      <VStack align="left" gap="2rem" mt="2rem" width="100%">
        <div>First name: {firstName}</div>
        <div>Last name: {lastName}</div>
      </VStack>
    </Container>
  );
}

export default Home;
