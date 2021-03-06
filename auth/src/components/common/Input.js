import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = (props) => {
    const { inputStyle, labelStyle, containerStyle } = styles;

    return (
    <View style={containerStyle}>
        <Text style={labelStyle}> {props.label} </Text>
        <TextInput 
                style={inputStyle}
                onChangeText={props.onChangeText}
                value={props.value}
                autoCorrect={false}
                secureTextEntry={props.secure}
                placeholder={props.placeholder}
        />
    </View>
    );
};

const styles = {
    inputStyle: {
        color: 'black',
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
      height: 40,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',  
    }
};

export { Input };
