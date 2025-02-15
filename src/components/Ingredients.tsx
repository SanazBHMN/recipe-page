import SectionTitle from "./SectionTitle";
import recipe from "../utils/recipe.json";

const Ingredients = () => {
  return (
    <div style={{ borderBottom: "1px solid hsl(30, 18%, 87%)" }}>
      <SectionTitle text="ingredients" />
      <ul>
        {recipe.ingredients.map((item, index) => (
          <li
            key={index}
            style={{
              color: "hsl(30, 10%, 34%)",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;
