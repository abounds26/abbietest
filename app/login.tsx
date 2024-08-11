import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState, useEffect } from 'react';
import CustomInput from "./components/CustomInput";
import CustomButton from "./components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from "./home";


export default function LoginScreen({navigation}){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [key, setKey] = useState('');

    navigation = useNavigation();

    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    
    const onSignInPressed = async (e) => {
        e.preventDefault();
       try{
        const response = await axios.post('https://api.voxo.co/v2/authentication', 
            JSON.stringify({email, password}),
            {
            headers: { 'Content-Type': 'application/json'}, 
        })
            .then(function(response){
                const token = response?.data?.accessToken;
                AsyncStorage.setItem('storage_Token', token);
                
        });

        setEmail("");
        setPassword("");
        
       navigation.navigate('home');

       } catch (err) {
        if (!err?.response){
            setErrMsg('No server response');
        } else if (err.response?.status === 400){
            setErrMsg('Missing username or password');
        } else if (err.response?.status === 401){
            setErrMsg('Unauthorized');
        }else{
            setErrMsg('Login failed');
        }
       }
       
        
    };

        
  return (
    <ScrollView>
    <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <CustomInput value={email} setValue={setEmail} placeholder="Email" secureTextEntry={false}/>
        <CustomInput value={password} setValue={setPassword} placeholder="Password" secureTextEntry={true}/>
        <CustomButton text="Sign In" onPress={onSignInPressed}/>
    </View>
    </ScrollView>
  );

}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    textAlign:'center',
  },
});
