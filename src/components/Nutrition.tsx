import SectionTitle from "./SectionTitle";
import recipe from "../utils/recipe.json";
import { Col, Row } from "react-bootstrap";
import useSize from "../hooks/useSize";

const Nutrition = () => {
  const width = useSize();

  return (
    <div>
      <SectionTitle text="nutrition" />
      <p>{recipe.nutrition.description}</p>
      {recipe.nutrition.table.map((item, index) => (
        <Row key={index} style={{ width: "100%" }}>
          <Col
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "15px",
              paddingBottom: "15px",
              textAlign: "left",
              borderBottom: "1px solid hsl(30, 18%, 87%)",
            }}
          >
            <span>{item.heading}</span>
            <span
              style={
                width > 767
                  ? {
                      width: "50%",
                      color: "hsl(14, 45%, 36%)",
                      fontWeight: "bold",
                    }
                  : {
                      width: "100px",
                      color: "hsl(14, 45%, 36%)",
                      fontWeight: "bold",
                    }
              }
            >
              {item.data}
            </span>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Nutrition;
