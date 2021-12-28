import styled from "@emotion/styled";
import { useCastData } from "../hooks/useCastData";
import { CastData } from "../types/cast";
import { CastCard } from "./CastCard";

export const CastCardContainer = () => {
  const { data, error } = useCastData();

  if (error) return <div> Error...!</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Container>
      {data.map((cast: CastData) => {
        return <CastCard castData={cast} key={`futurama-cast-${cast.id}`} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 3em;
`;
