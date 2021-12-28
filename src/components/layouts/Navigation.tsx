import styled from "@emotion/styled";
import Link from "next/link";
import { ROUTES } from "../../contstants";

interface ROUTE {
  ID: number;
  PATH: string;
  LABEL: string;
}
export const Navigation = () => {
  return (
    <Background>
      <Title>
        <Link href={`/`}>
          <a>FUTURAMA</a>
        </Link>
      </Title>
      <MenuWrap>
        <Menu>
          {ROUTES.map((routeObject: ROUTE) => {
            return (
              <li key={`main-menu-${routeObject.ID}`}>
                <Link href={routeObject.PATH}>
                  <a>{routeObject.LABEL}</a>
                </Link>
              </li>
            );
          })}
        </Menu>
      </MenuWrap>
    </Background>
  );
};

const Title = styled.h1`
  text-align: center;
  font-size: 4em;
  text-shadow: -1px -2px 0 #f9ca24, 1px -1px 0 #f9ca24, -1px 1px 0 #f9ca24,
    1px 1px 0 #f9ca24;
  color: red;
`;

const MenuWrap = styled.nav`
  margin: 0 auto;
  max-width: 1024px;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center
  flex-wrap: wrap;
  font-size: 1.8em;
  color: #fff;
  max-width: 1024px;
`;

const Background = styled.header`
  background-color: #2c2c2c;
`;
