import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from 'react';
import CustomInput from "./api/components/CustomInput";
import CustomButton from "./api/components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';
import Profile from "./profile";

export default function LoginScreen({}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const navigation = useNavigation();
    
    const onSignInPressed = async () => {

        setIsLoading(true);

       try{
        const response = await axios.post('https://api.voxo.co/v2/authentication', 
            JSON.stringify({email, password}),
            {
            headers: { 'Content-Type': 'application/json'},
            withCredentials:false
        });

        if (response.status===201) {
            setIsLoading(false);
            setEmail("");
            setPassword("");
            console.log(JSON.stringify(response?.data));
         //   navigation.navigate('profile');
        }

       } catch (error) {
        console.log(error);
        setIsLoading(false);
       }
        };
        
            
        //navigation.navigate('profile');
    
    

  return (
    <ScrollView>
    <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <CustomInput  value={email} setValue={setEmail} placeholder="Email" secureTextEntry={false}/>
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
