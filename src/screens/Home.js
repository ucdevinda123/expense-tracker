import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Shapes } from "react-native-background-shapes";

import Profile from "../components/ProfileContainer";
import ExpenseCard from "../components/ExpenseCardView";
import TransactionListItem from "../components/TransactionListItem";
import NoTransactionView from "../components/NoTransactionView";

/*Redux Related */

import { useSelector } from "react-redux";

export default Home = ({ navigation }) => {
  /*Retriving  data from store*/
  const dataList = useSelector((state) => {
    return state.data;
  });

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Shapes
        position="flex-start"
        figures={[{}]}
        borderRadius={22}
        primaryColor="#2ecfbf"
      ></Shapes>

      <View>
        <View style={{ paddingHorizontal: 10 }}>
          <Profile />
          <ExpenseCard navigation={navigation} />
        </View>

        <View>
          {dataList.length > 0 ? (
            <FlatList
              data={dataList}
              renderItem={({ item }) => (
                <TransactionListItem
                  id={item.id}
                  title={item.title}
                  amount={item.amount}
                  type={item.type}
                  isExpense={item.isExpense}
                />
              )}
              keyExtractor={(item) => item.id}
            ></FlatList>
          ) : (
            <NoTransactionView />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
  },
});
