import React from "react";
import { View, Text, StatusBar } from "react-native";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Hello world</Text>
      </View>
    </>
  );
};

export default App;
