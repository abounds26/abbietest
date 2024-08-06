
/*
import React, { useEffect, useState, useRef, useContext} from "react";
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
}*/

