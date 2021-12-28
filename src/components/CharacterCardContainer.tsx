import styled from "@emotion/styled";
import { CharacterData } from "../types/characters";
import { CharacterCard } from "../components/CharacterCard";
import { useCharacterData } from "../hooks/useCharacterData";

export const CharacterCardContainer = () => {
  const { data, error } = useCharacterData();

  if (error) return <div> Error...!</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Container>
      {data.map((character: CharacterData) => {
        return (
          <CharacterCard
            characterData={character}
            key={`futurama-character-${character.id}`}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 3em;
`;
