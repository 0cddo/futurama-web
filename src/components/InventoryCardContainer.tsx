import styled from "@emotion/styled";
import { useInventoryData } from "../hooks/useInventoryData";
import { InventoryData } from "../types/inventory";
import { InventoryCard } from "./InventoryCard";

export const InventoryCardContainer = () => {
  const { data, error } = useInventoryData();

  if (error) return <div> Error...!</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Container>
      {data.map((inventory: InventoryData) => {
        return (
          <InventoryCard
            inventoryData={inventory}
            key={`futurama-inventory-${inventory.id}`}
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
