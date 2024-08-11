import React from "react";
import { Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from './CSS/styles';
import Profile from "./profile";

export default function HomeScreen ({navigation, route}) {

  navigation = useNavigation();

  const company = () => {
    navigation.navigate("companyContacts")
  };

  const personal = () => {
    navigation.navigate("personalContacts")
  };
  
  const directory = () => {
    navigation.navigate("directory")
  };

  return (
    <>
      <View style={styles.containerBtn}>
    
        <Pressable 
          onPress={company}
          style={styles.btn}
        >
          <Text style={styles.textBtn}>Company Contacts</Text>
        </Pressable>

        <Pressable 
          onPress={personal}
          style={styles.btn}
        >
          <Text style={styles.textBtn}>Personal Contacts</Text>
        </Pressable>

        <Pressable 
          onPress={directory}
          style={styles.btn}
        >
          <Text style={styles.textBtn}>Department Users</Text>
        </Pressable>

      </View>
      
      <View>
        <Text style={styles.h1}>Welcome!</Text>
      </View>


    </>
  );
}
