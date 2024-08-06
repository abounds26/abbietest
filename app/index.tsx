import React from "react";
import { NavigationContainer } from "@react-navigation/native";
//import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from "./stack";
import { AuthProvider } from "./AuthProvider";

function App() {
  return (
    <AuthProvider>
      <AuthStack />
    </AuthProvider>

  );
}

export default App;