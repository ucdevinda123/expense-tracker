import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/screens/Home";
import Transaction from "./src/screens/Transaction";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { ExpenseReducer } from "./src/reducers/Reducers";

export default function App() {
  const initialState = {
    data: [],
  };
  const middlewares = [thunk]; // Thunk as middleware

  const store = createStore(
    ExpenseReducer,
    initialState,
    applyMiddleware(...middlewares)
  );

  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Transaction" component={Transaction} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
