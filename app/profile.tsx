//1. fetch the api, check the data in the console
//2. use the data to update the state and use flatlist to render data
//3. handle the errors and error state


import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {useEffect, useState} from 'react'; 

const Profile = () => {
/*

    const [list, setList]=useState('');
    const [error, setError]=useState();
    const [response, setResponse]=useState();

    useEffect(() => {
        fetch("https://api.voxo.co/v2/directory/company")
            .then(res => res.json())
            .then((result) => {
                setList('');
                setError(error);
            },
            (error) => {
                setList('');
                setError(error);
            }
        )
    },[]);

    const getContent = () => {
        if (error) {
            return <Text>{error}</Text>;
        }

        console.log(response);
        return <Text>{response}</Text>
    };
    */

    return (
        <Text>Your Profile</Text>
    );
}

export default Profile;

const styles = StyleSheet.create({
    container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
},
});


