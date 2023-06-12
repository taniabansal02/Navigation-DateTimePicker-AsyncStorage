import React from "react";
import {View, Text} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { styles } from "./style";

const Chat = () => {
    return(
      <LinearGradient colors={["#CDC4FB" ,"#A4C4FD"]} style={styles.container}>
        <Text> Chat Page</Text>
      </LinearGradient>
    );
};

export default Chat;