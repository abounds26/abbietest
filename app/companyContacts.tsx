import { useNavigation } from "@react-navigation/native";
import React from "react";
import axios from './api/axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from 'react';
import { ScrollView, View, Text } from "react-native";
import { styles } from "./CSS/styles";



export default function companyContacts(navigation){

    navigation=useNavigation();

    const [companyList, setCompanyList] = useState([]);


    const fetchCompanyContacts = async () => {
        try{
            const access = await AsyncStorage.getItem('storage_Token');
            const response = await axios.get("https://api.voxo.co/v2/directory/company", {
            headers: {
                'Authorization': `Bearer ${access}`
        },
        }) .then ((response) => {
            setCompanyList(response?.data);
            //console.log(access);
        });

        } catch(error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchCompanyContacts();
    },[])

    return (
        <ScrollView>
            <Text style={styles.h1}>Company Contacts</Text>
        {companyList.map((item) => {
            return (
                    <View>
                        <Text>{item.name}, {item.number}, {item.email}</Text> 
                    </View> 
            );
        })}
    </ScrollView>
    );
}