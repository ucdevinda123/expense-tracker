import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Switch,
  Alert,
  Dimensions,
} from "react-native";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
} from "native-base";
import SegmentedControl from "rn-segmented-control";
//Dispatch hook
import { useDispatch } from "react-redux";
import { saveTransaction } from "../actions/ExpenceTrackerActions";

export default Transactions = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();

  const [tabIndex, setTabIndex] = React.useState(1);
  const handleTabsChange = (index) => {
    setTabIndex(index);
    if (index == 0) {
      setIsExpense(false);
      setType("Income");
    } else {
      setIsExpense(true);
      setType("Expense");
    }
  };

  const displayMessage = (title, message) => {
    Alert.alert(title, message);
  };

  const addTransaction = () => {
    if (!title || !amount) {
      displayMessage("Opps...", "Please enter transaction details");
      return;
    }

    const id = Math.floor(Math.random() * 100000000);

    const newTransaction = {
      id,
      title,
      type,
      isExpense,
      amount: +amount,
    };

    dispatch(saveTransaction({ ...newTransaction }));
    displayMessage("Yay!", "Transaction saved successfully!.");
  };

  return (
    <Container>
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Title</Label>
            <Input
              onChangeText={(transactionTitle) => setTitle(transactionTitle)}
            />
          </Item>
          <Item floatingLabel style={{ margin: 3 }}>
            <Label style={{ fontSize: 13 }}>Amount</Label>
            <Input
              keyboardType="number-pad"
              onChangeText={(transactionAmount) => setAmount(transactionAmount)}
            />
          </Item>

          <View style={styles.switch}>
            <SegmentedControl
              tabs={["Income", "Expense"]}
              currentIndex={tabIndex}
              onChange={handleTabsChange}
              segmentedControlBackgroundColor="#2ecfbf"
              activeSegmentBackgroundColor="#FFF"
              activeTextColor="#2ecfbf"
              textColor="black"
              paddingVertical={10}
              width={Dimensions.get("screen").width - 100}
              containerStyle={{
                marginVertical: 20,
              }}
              textStyle={{
                fontWeight: "300",
              }}
            />
          </View>
        </Form>
      </Content>

      <View style={styles.bottom}>
        <Button
          full
          dark
          style={styles.addTransactionButton}
          onPress={addTransaction}
        >
          <Text style={styles.addTransactionButtonText}>Save</Text>
        </Button>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    flex: 2,
    backgroundColor: "#fff",
  },

  textBoxContainer: {
    marginHorizontal: 2,
    margin: 2,
  },

  bottom: {},

  addTransactionButton: {
    height: 60,
    borderRadius: 0,
    backgroundColor: "#00BCD4",
    justifyContent: "center",
    backgroundColor: "#2ecfbf",
  },

  addTransactionButtonText: {
    textAlign: "center",
    fontWeight: "bold",
    alignContent: "center",
    alignItems: "center",
    fontSize: 17,
    color: "#FFF",
  },

  switch: {
    flexDirection: "row",
    alignContent: "flex-end",
    marginTop: 40,
    margin: 12,
    marginLeft: 20,
  },
});
