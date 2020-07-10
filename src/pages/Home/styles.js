import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight() + 25}px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 15px 0;
`;

export const Header = styled.View`
  padding: 0 15px;
`;

export const SearchWrapper = styled.View`
  background-color: #253341;
  border-radius: 30px;
  padding: 5px 15px;

  flex-direction: row;
  align-items: center;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  padding: 10px;
  color: #fff;
`;

export const TweetList = styled.FlatList`
  flex: 1;
`;

export const TweetContent = styled.View`
  flex-direction: row;
  padding: 15px 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgb(56, 68, 77);
`;

export const TweetText = styled.Text`
  flex: 1;
  color: #fff;
  font-size: 15px;
`;

export const UserImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 15px;
`;

export const TweetWrapper = styled.View`
  flex: 1;
`;

export const UserName = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 3px;
`;
