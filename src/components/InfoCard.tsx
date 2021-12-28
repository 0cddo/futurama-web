import styled from "@emotion/styled";
import { InfoData } from "../types/info";

interface InfoCardProps {
  infoData: InfoData;
}

export const InfoCard = ({ infoData }: InfoCardProps) => {
  const { synopsis, yearsAired, creators } = infoData;
  return (
    <Card>
      <CardDescription>
        <h1>{synopsis}</h1>
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
