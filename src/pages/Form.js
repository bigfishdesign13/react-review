import { useContext } from "react";
// import TextInput from "../components/TextInput";
// import Heading from "../components/Heading";
import { Container } from "../App.styles";
import DataContext from "../utils/DataContext";

const Form = () => {
  // const { firstName, setFirstName, lastName, setLastName } =
  const { firstName, lastName } = useContext(DataContext);
  return (
    <Container>
      <p>
        Hi, {firstName} {lastName}!
      </p>
    </Container>
  );
};

export default Form;
