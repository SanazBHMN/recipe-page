import { Image, Stack } from "react-bootstrap";
import omelette from "../assets/image-omelette.jpeg";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Nutrition from "./Nutrition";
import RecipeCardDescription from "./RecipeCardDescription";
import useSize from "../hooks/useSize";

const RecipeCard = () => {
  const window = useSize();

  return (
    <main
      style={
        window > 767
          ? {
              padding: "1.7rem",
              backgroundColor: "white",
              margin: "3rem 0",
              borderRadius: "15px",
            }
          : { backgroundColor: "white" }
      }
    >
      <Image
        src={omelette}
        fluid
        style={window > 767 ? { borderRadius: "10px" } : { padding: "0" }}
      />
      <Stack gap={4} style={window < 767 ? { padding: "0 1.5rem" } : {}}>
        <RecipeCardDescription />
        <Ingredients />
        <Instructions />
        <Nutrition />
      </Stack>
    </main>
  );
};

export default RecipeCard;
