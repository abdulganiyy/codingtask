import React from "react";
import { View, Text, SafeAreaView } from "react-native";

import { useSelector } from "react-redux";

const AboutScreen = () => {
  const { user } = useSelector((state) => state.userReducer);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <Text>{user && user.Email}</Text>
        <Text>I am a Nigerian</Text>
        <Text>I am a Software Engineer</Text>
        <Text>
          I am have over 2years solid experience and always thriving to improve
          myself.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default AboutScreen;
