import styled from "@emotion/styled";
import { InfoData } from "../types/info";
import { useInfoData } from "../hooks/useInfoData";
import { InfoCard } from "./InfoCard";

export const InfoCardContainer = () => {
  const { data, error } = useInfoData();

  if (error) return <div> Error...!</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Container>
      {data.map((info: InfoData) => {
        return (
          <InfoCard infoData={info} key={`futurama-character-${info.id}`} />
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
