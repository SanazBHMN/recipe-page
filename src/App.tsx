import Container from "react-bootstrap/Container";
import RecipeCard from "./components/RecipeCard";
import { Col, Row } from "react-bootstrap";

function App() {
  return (
    <Container
      fluid
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "0",
        backgroundColor: "hsl(30, 54%, 90%)",
      }}
    >
      <Row style={{ width: "100%", justifyContent: "center" }}>
        <Col md={8} lg={6} style={{ padding: "0" }}>
          <RecipeCard />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
