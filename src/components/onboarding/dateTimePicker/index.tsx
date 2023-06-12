import React, { useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, Button, Text } from "react-native";
import Btn from "../../button";
import { styles } from "./style";

const Picker = () => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState(" Date and Time");

    const onChanger = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        let fTime = 'Hours : '+ tempDate.getHours() + '| Minutes : ' + tempDate.getMinutes();
        setText(fDate + '\n' + fTime );
        console.log(fDate);

    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    return (
        
        <View style={{flex:1}}>

            <Text style={styles.displayText}> {text}</Text>
            <Btn title="DatePicker" setFun={() => showMode('date')} />
            <Btn title="TimePicker" setFun={() => showMode('time')} />
            {/* <Button  onPress={() => showMode('date')} /> */}

            {/* <Button title="DatePicker" onPress={() => showMode('date')} />
            <Button title="TimePicker" onPress={() => showMode('time')} /> */}

            {
                show &&
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display='default'
                    onChange={onChanger}
                />
            }
        </View>



    );
};

export default Picker;