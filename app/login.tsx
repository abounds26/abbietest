import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState, useEffect } from 'react';
import CustomInput from "./components/CustomInput";
import CustomButton from "./components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import api from './api/axios';


export default function LoginScreen({}){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [list , setList] = useState([]);
    const [token, setToken] = useState('');

    const navigation = useNavigation();
    
    const onSignInPressed = async () => {
        
        setIsLoading(true);

       try{
        const response = await axios.post('https://api.voxo.co/v2/authentication', 
            JSON.stringify({email, password}),
            {
            headers: { 'Content-Type': 'application/json'},
            
            
        });

        if (response.status===200) {
            setIsLoading(false);
            setEmail("");
            setPassword("");
            let token=response.data.accessToken;
            setToken(token);
            //console.log(token);
        }
        

       } catch (error) {
        console.log(error);
        setIsLoading(false);
       }

       //return token;

        };

        //console.log(token);
        
        useEffect(() => {
            const fetchContacts = async () => {
                try{
                    const res = await axios.get('https://api.voxo.co/v2/directory/company', {headers : {'Authorization':`Bearer ${auth}`}})
                    setList(res.data);
                } catch(err) {
                    if(err.res){
                    console.log(err.res.data);
                    console.log(err.res.status);
                } else {
                    console.log(`Error:  ${err.message}`);
                }
              }
             }
            fetchContacts(token);
        },[])

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
