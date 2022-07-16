import React from "react";
import {
  Container,
  Logo,
  Flag,
  Text,
  Wrapper,
  Searchbox,
  Select,
  SearchIconWrapper,
} from "./styles";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import RoomOutlined from "@mui/icons-material/RoomOutlined";

const Navbar = () => {
  return (
    <>
      <Container>
        <Logo src="/assets/logo.png" width="40px" height="30px" />

        <Wrapper flexDirection="row" alignItems="center">
          <RoomOutlined />

          <Wrapper>
            <Text fontSize=".7em">Deliver in</Text>
            <Text>Nigeria</Text>
          </Wrapper>
        </Wrapper>

        {/* the search button */}
        <Select>
          <option value="All">All</option>
        </Select>
        <Searchbox />
        <SearchIconWrapper>
          <SearchOutlined />
        </SearchIconWrapper>

        {/* flag image */}
        <Wrapper flexDirection="row" alignItems="flex-start">
          <Flag src="/assets/flag.png" width="30px" height="20px" />
          <ArrowDropDown />
        </Wrapper>

        <Wrapper>
          <Text fontSize=".7em">Hello, Sign in</Text>

          <Wrapper flexDirection="row" alignItems="center">
            <Text>Account & Lists </Text>
            <ArrowDropDown />
          </Wrapper>
        </Wrapper>

        <Wrapper>
          <Text fontSize=".7em">Returns</Text>
          <Text>& Orders</Text>
        </Wrapper>

        <Wrapper flexDirection="row" alignItems="center">
          <Wrapper alignItems="center">
            <Text color="#ff9900">0</Text>
            <ShoppingCartOutlined />
          </Wrapper>

          <Text>Cart</Text>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
