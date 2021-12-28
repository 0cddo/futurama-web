import type { NextPage } from "next";
import axios from "axios";
import useSWR from "swr";
import { CharacterData } from "../../types/characters";
import styled from "@emotion/styled";

const fetcher = (url: string) => axios(url).then((res) => res.data);

const CharacterIndexPage: NextPage = () => {
  const { data, error } = useSWR(
    "https://api.sampleapis.com/futurama/characters",
    fetcher
  );

  if (error) return <div> Error...!</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Container>
      {data.map((character: CharacterData) => {
        const {
          age,
          gender,
          homePlanet,
          id,
          images,
          name,
          occupation,
          sayings,
        } = character;

        return (
          <Card key={`futurama-character-${id}`}>
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
      })}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 3em;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
`;
export default CharacterIndexPage;
