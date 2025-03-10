import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Button, ButtonGroup, HStack, VStack } from "@chakra-ui/react";
import { CloseButton } from "../components/ui/close-button";
import { Container } from "../App.styles";
import Heading from "../components/Heading";
import TextInput from "../components/TextInput";
import DataContext from "../utils/DataContext";

const Home = () => {
  const { firstName, setFirstName, lastName, setLastName } =
    useContext(DataContext);

  const [isInvalid, setIsInvalid] = useState({
    firstName: false,
    lastName: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const [showAlert, setShowAlert] = useState(false);

  const [validSubmit, setValidSubmit] = useState(false);

  const alertRef = useRef(null);

  const navigate = useNavigate();

  const onChangeHandlerFN = (e) => {
    const val = e.target.value;
    setFirstName(val);
  };
  const onChangeHandlerLN = (e) => {
    const val = e.target.value;
    setLastName(val);
  };
  const onSubmitHandler = () => {
    setIsInvalid({
      firstName: firstName === "",
      lastName: lastName === "",
    });
    setSubmitted(true);
  };
  const onClearHandler = () => {
    // setValidSubmit(false);
    setFirstName("");
    setLastName("");
    // setIsInvalid({
    //   firstName: false,
    //   lastName: false,
    // });
    setShowAlert(false);
  };
  const onClickClose = (e) => {
    setShowAlert(false);
  };

  // Show alert if there are form errors
  useEffect(() => {
    console.log(submitted);
    submitted &&
      (isInvalid.firstName || isInvalid.lastName
        ? setShowAlert(true)
        : setValidSubmit(true));
  }, [submitted, isInvalid]);

  // Focus on alert box when there is an error
  useEffect(() => {
    alertRef.current?.focus();
  }, [showAlert]);

  // Goto form
  useEffect(() => {
    validSubmit && navigate("/form");
  }, [navigate, validSubmit]);

  const AlertBox = (
    <Alert.Root mt="2rem" ref={alertRef} status="error" tabIndex={1}>
      <Alert.Indicator />
      <Alert.Content>
        <Alert.Title>Invalid Fields</Alert.Title>
        <Alert.Description>
          Your form has some errors. Please fix them and try again.
        </Alert.Description>
      </Alert.Content>
      <CloseButton
        pos="relative"
        top="-2"
        insetEnd="-2"
        onClick={onClickClose}
      />
    </Alert.Root>
  );

  return (
    <Container>
      <Heading>Heading</Heading>
      {showAlert && AlertBox}
      <HStack align="start" gap="2rem" my="2rem" width="100%">
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
      <ButtonGroup>
        <Button onClick={onSubmitHandler}>Submit</Button>
        <Button onClick={onClearHandler} variant="outline">
          Clear
        </Button>
      </ButtonGroup>
      <VStack align="left" gap="2rem" mt="2rem" width="100%">
        <div>First name: {firstName}</div>
        <div>Last name: {lastName}</div>
      </VStack>
    </Container>
  );
};

export default Home;
