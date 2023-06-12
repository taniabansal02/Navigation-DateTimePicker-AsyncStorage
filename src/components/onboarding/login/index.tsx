import React, { useState } from "react";
import { View, Text, ToastAndroid } from "react-native";
import {useNavigation} from '@react-navigation/native';
import { Pressable } from "react-native";
import { TouchableOpacity } from "react-native";
import { styles } from "./style";
import routes from "../../../assests/routes";
import { TextInput } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Btn from "../../button";
import Storage from "../asyncStorage";
import LinearGradient from 'react-native-linear-gradient';

const Login =() => {
    const navigation = useNavigation();

    // Function to go to asyncStorage Page
    const goToStorage = () => {
        navigation.navigate(routes.onboarding.storage.path)
    }

    const goToPicker = () => {
        navigation.navigate(routes.onboarding.picker.path)
    }

    const onHandle =() => {
        navigation.navigate(routes.onboarding.signup.path);
    };
    return(
        <LinearGradient colors={["#CDC4FB" ,"#A4C4FD"]} style={styles.container}>
        
            
            
            <Text style={styles.headerText}> Welcome Back </Text>
           <Btn  title="AsyncStorage" setFun={goToStorage} />

           <Btn title="dateTimePicker" setFun={goToPicker} />
            
            <Btn title="Go to SignUp Page" setFun={onHandle} />

            {/* <TouchableOpacity onPress={saveEmail} style={styles.btn}>
                <Text style={styles.btnText}> Save Email</Text>
            </TouchableOpacity> */}

            


        
        </LinearGradient>

        
    );
};

export default Login;