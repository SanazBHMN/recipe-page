import { Image, Stack } from "react-bootstrap";
import omelette from "../assets/image-omelette.jpeg";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Nutrition from "./Nutrition";
import RecipeCardDescription from "./RecipeCardDescription";

const RecipeCard = () => {
  return (
    <main>
      <Image src={omelette} fluid style={{ padding: "0" }} />
      <Stack gap={4} style={{ padding: "2rem" }}>
        <RecipeCardDescription />
        <Ingredients />
        <Instructions />
        <Nutrition />
      </Stack>
    </main>
  );
};

export default RecipeCard;
