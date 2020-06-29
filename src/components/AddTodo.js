﻿import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native';
import { THEME } from '../theme'


export const AddTodo = ({ onSubmit }) => {
    
    const [value, setValue]=useState('');
    
    const pressHandler = () => {
        if(value.trim()) {
            onSubmit(value);
            setValue('');
        }
        else {
            Alert.alert('Error','Name of todo is not to be empty')
        }
    }
    
    return (
        <View style={styles.wrapper}>
            <TextInput 
                onChangeText={setValue} 
                style={styles.input}
                value={value}
                placeholder="Enter todo name..."
                autoCorrect={false}
                autoCapitalize='none'
                keyboardType='numeric'
            />
            <Button title="Добавить" onPress={pressHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width:'70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR
    }
})