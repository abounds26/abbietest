import { useNavigation } from "@react-navigation/native";
import React from "react";
import axios from './api/axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from 'react';
import { ScrollView, View, Text } from "react-native";
import CustomButton from "./components/CustomButton";
import CustomInput from "./components/CustomInput";
import { StyleSheet } from "react-native";
import { styles } from "./CSS/styles";



export default function personalContacts(navigation){

    navigation=useNavigation();


    const [personalList, setPersonalList] = useState([]);
    const [firstName, setFirstName]=useState('');
    const [lastName, setLastName]=useState('');
    const [email, setEmail]=useState('');
    const [phone, setPhone]=useState('');
    const [id, setId]=useState('');
    const [newPersonalList, setNewPersonalList] = useState([]);

    


    const fetchPersonalContacts = async () => {
        try{
            const access = await AsyncStorage.getItem('storage_Token');
            const response = await axios.get("https://api.voxo.co/v2/directory/personal", {
            headers: {
                'Authorization': `Bearer ${access}`
        },
        }) .then ((response) => {
            setPersonalList(response?.data);
            
        });

        } catch(error) {
            console.log(error);
        }
    };

    const delContact = () => {
        try{
            const key =  AsyncStorage.getItem('storage_Token');
            const response =  axios.delete(`https://api.voxo.co/v2/directory/${id}`, {
            headers: {
                'Authorization': `Bearer ${key}`
        },
        }) .then ((response) => {
            setNewPersonalList(response?.data);
            console.log('delete successful')
        });

        } catch(error) {
            console.log('did not delete');
            console.log(error);
        }
    };


    const addContact = () => {
        const tokenKey =  AsyncStorage.getItem('storage_Token');
        try{
            const response = axios.post("https://api.voxo.co/v2/directory", 
                JSON.stringify({firstName, lastName, email, phone}),
                {
                    headers: {
                        'Authorization': `Bearer ${tokenKey}`
                    },
            }).then ((reponse) => {
                setNewPersonalList(response?.data);
                console.log('contact added');
            });
        }catch (error) {
            console.log('did not add contact');
            console.log(error);
        }
    };
    

    useEffect(() => {
        fetchPersonalContacts();
       // delContact();
        //addContact();
    },[])

    return (
        <ScrollView>
            <Text style={styles.h1}>Personal Contacts</Text>
        {personalList.map((item) => {
            return (
                    <View>
                        <Text>{item.name}, {item.id}, {item.number}, {item.email}</Text> 
                    </View> 
            );
        })}


        <View style={newstyles.container}>
        <View style={newstyles.row}>
        <Text style={newstyles.text}>Add Contact</Text>
            <CustomInput value={firstName} setValue={setFirstName} placeholder="First Name" secureTextEntry={false}/>
            <CustomInput value={lastName} setValue={setLastName} placeholder="Last Name" secureTextEntry={false}/>
            <CustomInput value={email} setValue={setEmail} placeholder="Email" secureTextEntry={false}/>
            <CustomInput value={phone} setValue={setPhone} placeholder="Phone Number" secureTextEntry={false}/>
            <CustomButton text="Add" onPress={addContact}/>
        </View>

        <View style={newstyles.row}>
        <Text style={newstyles.text}>Delete Contact</Text>
            <CustomInput value={id} setValue={setId} placeholder="Contact ID" secureTextEntry={false}/>
            <CustomButton style={newstyles.button} text="Delete" onPress={delContact}/>
        </View>
        </View>
    </ScrollView>
    );
}


const newstyles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
     
    },
    title: {
      fontSize: 64,
      fontWeight: "bold",
      textAlign:'center',
    },
    row: {
        marginLeft: 100,
        marginRight:100,
        marginTop: 200,
        alignItems:'center',
        
    },
    button: {
        padding: 50,
        backgroundColor: 'red',
    },
    text: {
        textAlign:'center',
        fontSize: 30,
    },
});
  