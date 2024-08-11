

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./login";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./home";
import companyContacts from "./companyContacts";
import personalContacts from "./personalContacts";
import departmentUsers from "./directory";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator
            initialRouteName = "login">
            <Stack.Screen name="login" component={LoginScreen}/>
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="companyContacts" component={companyContacts}/>
            <Stack.Screen name="personalContacts" component={personalContacts}/>
            <Stack.Screen name="directory" component={departmentUsers}/>
        </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AuthStack;

