import styled from "@emotion/styled";
import { QuestionsData } from "../types/questions";

interface QuestionsCardProps {
  questionsData: QuestionsData;
}

export const QuestionsCard = ({ questionsData }: QuestionsCardProps) => {
  const { question, possibleAnswers, correctAnswer } = questionsData;
  return (
    <Card>
      <CardDescription>
        <h1>{question}</h1>
        <p>{possibleAnswers}</p>
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
