import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./login";
import Profile from "./profile";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="login" component={LoginScreen}/>
            <Stack.Screen name="profile" component={Profile} />
        </Stack.Navigator>
    );
};

export default AuthStack;