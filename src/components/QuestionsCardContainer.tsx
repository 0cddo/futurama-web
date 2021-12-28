import styled from "@emotion/styled";
import { useQuestionsData } from "../hooks/useQuestionsData";
import { QuestionsData } from "../types/questions";
import { QuestionsCard } from "./QuestionsCard";

export const QuesitonsCardContainer = () => {
  const { data, error } = useQuestionsData();

  if (error) return <div> Error...!</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Container>
      {data.map((quesitons: QuestionsData) => {
        return (
          <QuestionsCard
            questionsData={quesitons}
            key={`futurama-questions-${quesitons.id}`}
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
