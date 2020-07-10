import React, { useState } from "react";
import { FlatList } from "react-native";

import Icon from "react-native-vector-icons/Feather";

import {
  Container,
  Content,
  Header,
  SearchWrapper,
  SearchInput,
  TweetList,
  TweetContent,
  TweetText,
  UserImage,
  TweetWrapper,
  UserName,
} from "./styles";

const Home = () => {
  const [posts, setPosts] = useState([
    {
      user: {
        screen_name: "bluehost",
        name: "Bluehost",
        profile_image_url:
          "http://pbs.twimg.com/profile_images/1268165217709707265/A4sv4SQ2_normal.jpg",
      },
      id: "1280878322038329300",
      text:
        "Me: Do I need a semicolon?\nC++: Yes.\nPython: No.\nJavascript: \n\n#Coding #100DaysOfCode #WebDev https://t.co/6FlhqOlN8m",
      retweet_count: 37,
    },
    {
      user: {
        screen_name: "ZDNet",
        name: "ZDNet",
        profile_image_url:
          "http://pbs.twimg.com/profile_images/706961982545473536/Ibj46-DX_normal.jpg",
      },
      id: "1280509384511107000",
      text:
        "Chrome JavaScript timer throttling: Google's tests show it saves up to 2 hours' battery life https://t.co/Ayyysoxxhd",
      retweet_count: 27,
    },
    {
      user: {
        screen_name: "LambdaSchool",
        name: "Lambda School",
        profile_image_url:
          "http://pbs.twimg.com/profile_images/1280174472578777095/t2I8Ho16_normal.png",
      },
      id: "1280916312865333200",
      text:
        "Our Full-Stack Web curriculum is an immersive, online program to prepare you for a successful career in #webdev:… https://t.co/qAIpe8xlBF",
      retweet_count: 18,
    },
    {
      user: {
        screen_name: "AjaxTips",
        name: "Ajax Tips",
        profile_image_url:
          "http://pbs.twimg.com/profile_images/3201468625/21156b53c6ccfbbcbfbb2ad2d122c76b_normal.png",
      },
      id: "1281216142690959400",
      text: "Buy vs. build for web features https://t.co/lmxWF2NbUp",
      retweet_count: 0,
    },
  ]);

  return (
    <Container>
      <Header>
        <SearchWrapper>
          <Icon name="search" size={22} color="#8899a6" />
          <SearchInput />
        </SearchWrapper>
      </Header>

      <Content>
        <TweetList
          data={posts}
          keyExtractor={(post) => post.id}
          renderItem={({ item: post }) => (
            <TweetContent>
              <UserImage source={{ uri: post.user.profile_image_url }} />
              <TweetWrapper>
                <UserName>{post.user.name}</UserName>
                <TweetText>{post.text}</TweetText>
              </TweetWrapper>
            </TweetContent>
          )}
        />
      </Content>
    </Container>
  );
};

export default Home;
