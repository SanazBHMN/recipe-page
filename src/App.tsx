import Container from "react-bootstrap/Container";
import RecipeCard from "./components/RecipeCard";
import { Row } from "react-bootstrap";

function App() {
  return (
    <Container
      fluid
      style={{
        padding: "0",
      }}
    >
      <Row>
        <RecipeCard />
      </Row>
    </Container>
  );
}

export default App;
