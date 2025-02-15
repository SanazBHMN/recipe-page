import SectionTitle from "./SectionTitle";
import recipe from "../utils/recipe.json";
import { Col, Row } from "react-bootstrap";

const Nutrition = () => {
  return (
    <div>
      <SectionTitle text="nutrition" />
      <p>{recipe.nutrition.description}</p>
      {recipe.nutrition.table.map((item, index) => (
        <Row key={index}>
          <Col
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "0 50px",
              padding: "15px 0",
              textAlign: "left",
              borderBottom: "1px solid hsl(30, 18%, 87%)",
            }}
          >
            <span>{item.heading}</span>
            <span>{item.data}</span>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Nutrition;
