const expenseImage = require("../../assets/images/expense.png");
const incomeImage = require("../../assets/images/income.png");
const removeIcon = require("../../assets/images/remove.png");
import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { ListItem, Left, Body, Right, Thumbnail } from "native-base";
import Swipeout from "react-native-swipeout";
/*Redux*/
import { useDispatch } from "react-redux";
import { removeTransaction } from "../actions/ExpenceTrackerActions";

export default TransactionListItem = ({
  id,
  title,
  amount,
  type,
  isExpense,
}) => {
  const dispatch = useDispatch();
  const swipeoutBtns = [
    {
      autoClose: true,
      underlayColor: "rgba(0, 0, 0, 1, 0.6)",
      onPress: () => {
        //console.log("Delete Item");
          dispatch(removeTransaction({ id }));
      },
      component: (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: "#fff",
          }}
        >
          <Image source={removeIcon} />
        </View>
      ),
    },
  ];

  return (
    <Swipeout right={swipeoutBtns} backgroundColor="transparent">
      <ListItem avatar>
        <Left>
          <Thumbnail
            style={styles.transactionImg}
            source={isExpense ? expenseImage : incomeImage}
          />
        </Left>
        <Body>
          <Text style={styles.transactionTitle}>{title}</Text>
          <Text note>{type}</Text>
        </Body>
        <Right>
          <Text
            note
            style={
              isExpense ? styles.amountTextExpense : styles.amountTextIncome
            }
          >
            {isExpense ? "- RM" : "+ RM"} {amount.toFixed(2)}
          </Text>
        </Right>
      </ListItem>
    </Swipeout>
  );
};

const styles = StyleSheet.create({
  transactionImg: {
    height: 35,
    width: 35,
  },

  transactionTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },

  amountTextExpense: {
    fontWeight: "bold",
    color: "#FF0000",
    fontSize: 18,
    marginTop: 7,
  },

  amountTextIncome: {
    fontWeight: "bold",
    color: "#2ecfbf",
    fontSize: 18,
    marginTop: 7,
  },
});
