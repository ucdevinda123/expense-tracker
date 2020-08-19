import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Button, Icon } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
export default ExpenseCard = ({ navigation }) => {
  /*Retriving  data from store*/
  const expenseList = useSelector((state) => {
    return state.data;
  });

  let allExpenses = 0;
  let allIncome = 0;
  expenseList.forEach((transaction) => {
    if (transaction.isExpense == true) {
      allExpenses += transaction.amount;
    } else {
      allIncome += transaction.amount;
    }
  });
  let totalBalance = (allIncome - allExpenses).toFixed(2);

  return (
    <Card
      style={styles.cardBox}
      cardElevation={2}
      cardMaxElevation={2}
      cornerRadius={5}
    >
      <View style={{ flexDirection: "column", width: "80%" }}>
        <Text>Current balance:</Text>
        <Text style={styles.currentBalanceValueText}>RM {totalBalance}</Text>
      </View>

      <View style={styles.addTransButtonWraper}>
        <Button
          onPress={() => {
            navigation.navigate("Transaction");
          }}
          rounded
          light
          style={styles.addTransactionRoundButton}
        >
          <Icon name="ios-add" />
        </Button>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  addTransactionRoundButton: {
    alignItems: "flex-end",
    padding: 2,
    borderWidth: 1,
    borderColor: "#3884FF",
    backgroundColor: "#FFF",
  },

  currentBalanceValueText: {
    fontWeight: "bold",
    fontSize: 26,
  },

  cardBox: {
    marginTop: 20,
    width: "100%",
    height: 170,
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 22,
    flexDirection: "column",
  },

  addTransButtonWraper: {
    width: "20%",
    alignItems: "flex-end",
  },
});
