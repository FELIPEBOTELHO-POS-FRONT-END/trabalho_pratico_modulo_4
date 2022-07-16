import styled from "styled-components";
import Image from "next/image";
import { PageText as NavText } from "../helpers/PageText";
import { PageItemWrapper as NavItemWrapper } from "../helpers/ItemWrapper";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  background-color: #131a22;
`;
export const Logo = styled(Image)`
  width: 6em;
  border: 1px solid #131a22;
  padding: 0.2em 0.1em;
  cursor: pointer;
`;
export const Text = styled(NavText)`
  color: ${(props) => (props.color ? props.color : "#ffffff")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : ".9em")};
`;

export const Wrapper = styled(NavItemWrapper)`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
  align-items: ${(props) =>
    props.alignItems ? props.alignItems : "flex-start"};
  padding: 0.1em;
  cursor: pointer;
  border: 1px solid #131a22;

  @media (max-width: 850px) {
    display: none;
  }
`;

export const Searchbox = styled.input`
  background-color: #ffffff;
  padding: 0.78em;
  width: 47%;
  border: none;
  @media (max-width: 850px) {
    border-radius: 0.2em;
    margin: 0.3em 0;
  }
`;
export const Select = styled.select`
  background-color: #ddd;
  margin-right: -1.2em;
  padding: 0.72em 0.5em;
  border-radius: 0.2em 0em 0em 0.2em;
  border: none;
  cursor: pointer;
  @media (max-width: 850px) {
    display: none;
  }
`;
export const SearchIconWrapper = styled.span`
  background-color: #fabd60;
  color: #131a22;
  margin-left: -1em;
  border-radius: 0em 0.2em 0.2em 0em;
  padding: 0.32em 0.5em;
  cursor: pointer;
  transition: all 250ms ease;
  &:hover {
    background-color: #ff9900;
  }
  @media (max-width: 850px) {
    display: none;
  }
`;
export const Flag = styled(Image)`
  width: 2em;
`;
