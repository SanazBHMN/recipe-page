import { Stack } from "react-bootstrap";
import recipe from "../utils/recipe.json";

const RecipeCardDescription = () => {
  return (
    <Stack gap={3}>
      <h1>Simple Omelette Recipe</h1>
      <p>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
      <div
        style={{
          backgroundColor: "hsl(330, 100%, 98%)",
          padding: "1rem",
          borderRadius: "10px",
        }}
      >
        <p style={{ color: "hsl(332, 51%, 32%)", fontWeight: "bold" }}>
          Preparation time
        </p>
        {recipe.preparation.map((item, index) => (
          <li key={index}>
            <span style={{ fontWeight: "bold" }}>{item.title}</span>:
            <span> {item.description}</span>
          </li>
        ))}
      </div>
    </Stack>
  );
};

export default RecipeCardDescription;
