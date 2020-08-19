import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Thumbnail } from "native-base";
export default NoTransactionView = () => {
  const emptyTransactionsImg = require("../../assets/images/empty.png");
  return (
    <View style={{ alignItems: "center", marginTop: 30 }}>
      <Thumbnail
        source={emptyTransactionsImg}
        style={styles.emptyTransactionImg}
      />
      <Text style={styles.emptyTransactionsText}>No transactions yet?...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyTransactionImg: {
    height: 135,
    width: 135,
  },

  emptyTransactionsText: {
    marginTop: 10,
    color: "#ff4500",
    fontWeight: "700",
    fontSize: 20,
  },
});
