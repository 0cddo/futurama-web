import axios from "axios";
import useSWR from "swr";
import { CharacterData } from "../types/characters";
import { CharacterCard } from "../components/CharacterCard";
import styled from "@emotion/styled";

const fetcher = (url: string) => axios(url).then((res) => res.data);

export const CharacterCardContainer = () => {
  const { data, error } = useSWR(
    "https://api.sampleapis.com/futurama/characters",
    fetcher
  );

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
