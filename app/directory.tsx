import { useNavigation } from "@react-navigation/native";
import React from "react";
import axios from './api/axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from 'react';
import { ScrollView, View, Text } from "react-native";
import { styles } from "./CSS/styles";



export default function departmentUsers(navigation){

    navigation=useNavigation();

    const [deptUserList, setDeptUserList] = useState([]);


    const fetchDeptUsers = async () => {
        try{
            const access = await AsyncStorage.getItem('storage_Token');
            const response = await axios.get("https://api.voxo.co/v2/branches/users", {
            headers: {
                'Authorization': `Bearer ${access}`
        },
        }) .then ((response) => {
            setDeptUserList(response?.data);
            
        });

        } catch(error) {
            console.log(error);
        }
    };

   /*     
    
    const updateStatus =  () => {

        {deptUserList.map((item) => {
            if(item.status===null){
                return (
                    item.status=='available'
                );
            };
        })};
    };


        if (deptUserList.status === null){
            setDeptUserList([...deptUserList, {status: 'Available'}]);
        }
    };
    */

    //console.log(deptUserList.status);
    

    useEffect(() => {
        fetchDeptUsers();
    },[])

    return (
        <ScrollView>
            <Text style={styles.h1}>Department Users</Text>
        {deptUserList.map((item) => {
            return (
                    <View>
                        <Text>{item.name}, {item.status}, {item.dnd}</Text> 
                    </View> 
            )
        })};
        </ScrollView>
    );
}