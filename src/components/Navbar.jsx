import {Badge} from "@material-ui/core";
import {Search, ShoppingCartOutlined} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import {mobile} from "../responsive";
import mainLogo from '../assets/logo.png'

const Container = styled.div`
  height: 4rem;
  ${mobile({ height: "3rem", width: "100%" })}
`;

const Wrapper = styled.div`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "1rem 0rem" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 1rem;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.2rem solid lightgray;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  margin-left: 2rem;
  padding: 1rem;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "3rem" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const LogoContainer = styled.div`
  align-items: center;
  justify-content: center;
  ${mobile({ fontSize: "2rem", justifyContent: "flex-end" })}
`;

const Logo = styled.img`
  width: 3rem;
  height: 3rem;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "left" })}
`;

const MenuItem = styled.div`
  font-size: 1rem;
  cursor: pointer;
  margin-left: 2rem;
  ${mobile({ fontSize: "0.6rem", marginLeft: "0.5rem" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <LogoContainer>
            <Logo src={mainLogo}/>
          </LogoContainer>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
