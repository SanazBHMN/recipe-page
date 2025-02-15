// import "./App.css";
import Container from "react-bootstrap/Container";
import Ingredients from "./components/Ingredients";
import Instructions from "./components/Instructions";
import Nutrition from "./components/Nutrition";

function App() {
  return (
    <Container fluid>
      <Ingredients />
      <Instructions />
      <Nutrition />
    </Container>
  );
}

export default App;
