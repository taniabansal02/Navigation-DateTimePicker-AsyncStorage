import React, { useState } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { styles } from "./style";
import routes from "../../../assests/routes";
import Picker from "../dateTimePicker";
import LinearGradient from 'react-native-linear-gradient';
import Btn from "../../button";


const SignUp = () => {
    const navigation = useNavigation();
   

    

    const goToChat = () => {
        navigation.navigate(routes.dashboard.path);
    }

    const goToLogin = () => {
        navigation.navigate(routes.onboarding.login.path);
    }


    return (
        <LinearGradient colors={["#CDC4FB" ,"#A4C4FD"]} style={styles.container}>
            <Text style={styles.signupText}> SignUp page </Text>
     
            
           
            <Btn  title="Go to Dashboard Page" setFun={goToChat} />
            <Btn  title="Go to Login Page" setFun={goToLogin} />

            {/* <TouchableOpacity onPress={onHandle} style={styles.btn}>
                <Text style={styles.btnText}> Go to Chat Page </Text>
            </TouchableOpacity> */}

            {/* <TouchableOpacity onPress={goToLogin} style={styles.btn}>
                <Text style={styles.btnText}> Go to Login Page </Text>
            </TouchableOpacity> */}

           
    
        
        </LinearGradient>
    );
};

export default SignUp;