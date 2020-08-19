import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Thumbnail } from "native-base";

export default Profile = () => {
  const exampleImage = require("../../assets/images/profile.jpeg");

  return (
    <View style={{ paddingHorizontal: 10, flexDirection: "row" }}>
      <Thumbnail
        borderWidth={3}
        borderColor="#fff"
        height={40}
        width={40}
        style={{ marginTop: 30 }}
        source={exampleImage}
      />
      <Text style={styles.profileName}>Chinthaka Devinda</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileName: {
    marginTop: 45,
    paddingLeft: 15,
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
