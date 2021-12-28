import styled from "@emotion/styled";
import Link from "next/link";

export const Footer = () => {
  return (
    <Footerstyle>
      <p>&copy;0cddo</p>
    </Footerstyle>
  );
};

const Footerstyle = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 18px;
`;
