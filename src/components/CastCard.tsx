import styled from "@emotion/styled";
import { CastData } from "../types/cast";

interface CastCardProps {
  castData: CastData;
}

export const CastCard = ({ castData }: CastCardProps) => {
  const { born, name } = castData;
  return (
    <Card>
      <CardDescription>
        <h1>{name}</h1>
        <p>{born}</p>
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
