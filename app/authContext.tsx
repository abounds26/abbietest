

/*import React, { useEffect, useState, useRef, useContext} from "react";
import axios from './api/axios';
import AuthContext from "./AuthProvider";

const LOGIN_URL = '/auth';

const AuthProvider = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    //const [success, setSuccess] = useState(''); replace with destination page like profile

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setError('');
    }, [email, password])

    return(
        <Text>
            
        </Text>
    )

}
/*
const handleAuthorize = async () => {
    try {
        const result = await authorize ({
            issuer:'https://api.voxo.co/v2/authentication',
            clientId:"email",

                
            
        })
    }
}


const AuthContext = createContext(null);

const AuthProvider : React.FC = ({children}) => {
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    const login = (username, password) => {
        axios.post('https://api.voxo.co/v2/authentication', {
            username,
            password
        })
        .then(res => {
            console.log(res.data);
            let userInfo = res.data;
            setUserInfo(userInfo);
            setUserToken(userInfo.data.accessToken);
        })
        .catch(error => {
            console.log('Login Error');
        });
    }

    return (
        <AuthContext.Provider value={{login, userToken}}>
            {children}
        </AuthContext.Provider>
    );
}
    */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View } from 'react-native';

export default function AuthContext ({}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState('');

    setIsLoading(true);

    const auth = async () => {
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
         let userToken=response.data;
         setUserToken(userToken.data.accessToken);

     }

    } catch (error) {
     setIsLoading(false);
    }
    
};

    return (
        <AuthContext></AuthContext>
    );
}


