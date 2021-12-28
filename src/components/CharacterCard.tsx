import styled from "@emotion/styled";
import { CharacterData } from "../types/characters";

interface CharacterCardProps {
  characterData: CharacterData;
}

export const CharacterCard = ({ characterData }: CharacterCardProps) => {
  const { age, homePlanet, images, name } = characterData;
  return (
    <Card>
      <img src={images.main} />
      <CardDescription>
        <h1>
          {name.first} {name.middle} {name.last}
        </h1>
        <p>homePlanet: {homePlanet}</p>
        <p>age: {age}</p>
      </CardDescription>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
`;
