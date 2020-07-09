import React from "react";
import { Text } from "react-native";

import { Container, SearchWrapper, SearchInput } from "./styles";

const Home = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput />
      </SearchWrapper>
      <Text
        style={{
          color: "#fff",
        }}
      >
        Dash
      </Text>
    </Container>
  );
};

export default Home;
