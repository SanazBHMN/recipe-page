// import "./App.css";
import Container from "react-bootstrap/Container";
import Ingredients from "./components/Ingredients";
import Instructions from "./components/Instructions";

function App() {
  return (
    <Container fluid>
      <Ingredients />
      <Instructions />
    </Container>
  );
}

export default App;
