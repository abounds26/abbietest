import { View, Text, StyleSheet, Pressable} from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, text, style }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor:'red',
        width:'20%',
        padding: 10,
        alignItems:'center',
        borderRadius:5,
        marginVertical:5,
    },
    text: {
        color:'white',
    },
});

export default CustomButton;