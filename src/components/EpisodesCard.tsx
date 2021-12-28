import styled from "@emotion/styled";
import { EpisodesData } from "../types/episodes";

interface EpisodesCardProps {
  episodesData: EpisodesData;
}

export const EpisodesCard = ({ episodesData }: EpisodesCardProps) => {
  const { number, title, writers, originalAirDate, desc } = episodesData;
  return (
    <Card>
      <CardDescription>
        <h1>{title}</h1>
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
