import {
  Container,
  LeftContainer,
  RightContainer,
  Wrapper,
  ImageS,
  Text,
  Paragraph,
  ProductContainer,
  ImageContainer,
  SearchResultDiv,
  IconWrapper,
  BoldText,
} from "./styles";

import Link from "next/link";

const Menubar = ({ data }: any) => {
  return (
    <Container>
      <RightContainer>
        <SearchResultDiv>
          <BoldText>1-12 of over 2,000 results for</BoldText>
          <BoldText color="#c45500"> All Departments</BoldText>
        </SearchResultDiv>

        <ProductContainer>
          {data.map((item: any) => (
            <Wrapper key={item.id} flexDirection="column">
              <Link href={`/products/${item.id}`}>
                <ImageContainer>
                  <ImageS src={item.image} width="200px" height="200px" />
                </ImageContainer>
              </Link>
              <Text>{item.title}</Text>

              <Wrapper alignItems="center" margin=".3em 0 .3em 0">
                <Text fontSize="1.3em">{item.price}</Text>
              </Wrapper>
            </Wrapper>
          ))}
        </ProductContainer>
      </RightContainer>
    </Container>
  );
};

export default Menubar;
