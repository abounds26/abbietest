//1. fetch the api, check the data in the console
//2. use the data to update the state and use flatlist to render data
//3. handle the errors and error state


import React from 'react';
import { View, Text } from 'react-native';



const Profile = () => {
    /*
    const [userToken,setUserToken] = useContext(AuthContext);
    //const [userToken, setUserToken] = useState('');
    useEffect(() => {
        const headers = {'Authorization': 'Bearer setUserToken'};
        const response = axios.get('https://api.voxo.co/v2/directory/company', {headers})
            .then((response) => response.json())
            .then((response) => {
                console.log(response.data);
            })
       }); 
*/

    return (
        <View>
            <Text>My Profile</Text>
        </View>
    );
}

export default Profile;




