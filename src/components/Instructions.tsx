import SectionTitle from "./SectionTitle";
import recipe from "../utils/recipe.json";

const Instructions = () => {
  return (
    <div>
      <SectionTitle text="instructions" />
      <ol>
        {recipe.instructions.map((item, index) => (
          <li key={index}>
            <p>
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                {item.title}
              </span>
              :
              <span style={{ color: "hsl(30, 10%, 34%)" }}>
                {" "}
                {item.description}
              </span>
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Instructions;
