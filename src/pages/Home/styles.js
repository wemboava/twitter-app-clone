import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  padding: 25px;
  padding-top: ${getStatusBarHeight() + 25}px;
`;

export const SearchWrapper = styled.View`
  background-color: #253341;
  border-radius: 20px;
`;

export const SearchInput = styled.TextInput`
  padding: 10px;
`;
