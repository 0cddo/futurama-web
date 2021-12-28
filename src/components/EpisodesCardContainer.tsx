import styled from "@emotion/styled";
import { useEpisodesData } from "../hooks/useEpisodesData";
import { EpisodesData } from "../types/episodes";
import { EpisodesCard } from "./EpisodesCard";
EpisodesCard;

export const EpisodesCardContainer = () => {
  const { data, error } = useEpisodesData();

  if (error) return <div> Error...!</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Container>
      {data.map((episodes: EpisodesData) => {
        return (
          <EpisodesCard
            episodesData={episodes}
            key={`futurama-character-${episodes.id}`}
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
