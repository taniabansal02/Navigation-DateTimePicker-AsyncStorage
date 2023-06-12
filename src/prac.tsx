import React, { useState, useEffect } from "react";
import { View, Text, TextInput, ScrollView, Image, Button } from "react-native";

const App = () => {
    // useState Hook declaration
    const [textCount, setTextCount] = useState(0);

    // useEffect Hook
    useEffect(() => {
        console.warn('Text count = ', textCount);
    })
    return (

        <ScrollView>
            <Text> Text count is : {textCount} </Text>
            <Button title="useState Hook" onPress={() => setTextCount(textCount + 1)}>
            </Button>
        </ScrollView>

    )
}

export default App;