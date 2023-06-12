import React, { useState } from "react";
import { View, ToastAndroid, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Btn from "../../button";
import { styles } from "./style";

const Storage = () => {
    const [email, setEmail] = useState('');

    const saveEmail = async () => {

        await AsyncStorage.setItem('email', email);

        // ToastAndroid Component
        ToastAndroid.show('Email saved', ToastAndroid.SHORT);
    }

    const showEmail = async () => {
        const asyncEmail = await AsyncStorage.getItem('email');
        if (asyncEmail) {
            setEmail(asyncEmail);
        }
    }
    return (

        <View>
            <TextInput placeholder="Enter Email" value={email} onChangeText={setEmail} style={styles.input} />

            <Btn title="Save Email" setFun={saveEmail} />
            <Btn title="Show Email" setFun={showEmail} />

        </View>
    );
};

export default Storage;