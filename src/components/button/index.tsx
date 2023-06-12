import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./style";
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  title : string,
  setFun ?: ()=>void;
 
  
}

const Btn = ({title, setFun} : Props) => {
   
       
   
    return (
        <View>
            
            <TouchableOpacity style={styles.btn} onPress={setFun}>
                <Text style={styles.btnText}> { title } </Text>
            </TouchableOpacity>
            
        </View>
    );

}

export default Btn;