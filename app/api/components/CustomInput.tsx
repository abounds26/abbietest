import { StyleSheet, TextInput, View } from "react-native";
import React, { useState } from 'react';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {

return (
    
      <View>
        <TextInput 
            style={styles.input} 
            value={value} 
            onChangeText={setValue}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            />
      </View>
      
  );
}

const styles = StyleSheet.create({
  input: {
    height:40,
    margin:12,
    borderWidth:1,
    padding:10,
    borderColor:'black',
    textAlign:'center',
  }
});

export default CustomInput; 