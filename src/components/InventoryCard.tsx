import styled from "@emotion/styled";
import { InventoryData } from "../types/inventory";

interface InventoryCardProps {
  inventoryData: InventoryData;
}

export const InventoryCard = ({ inventoryData }: InventoryCardProps) => {
  const { title, category, description } = inventoryData;
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
