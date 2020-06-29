import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import { THEME } from '../theme'
import {AppCard} from "../components/ui/AppCard";


export const TodoScreen = ({ goBack, todo }) => {
    return(
        <View>
            <AppCard style={styles.card}>
                <Text style={styles.text}>{todo.title}</Text>
                <Button onPress={() => console.log('to edit')} title="Edit" />
            </AppCard>
            
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button onPress={goBack} title="Go back" color={THEME.GRAY_COLOR} />
                </View>
                <View style={styles.button}>
                    <Button onPress={() => console.log('to remove') } title="Remove" color={THEME.DANGER_COLOR} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    card: {
        marginBottom: 20,
        padding: 15
    },
     button:{
        width:'40%'
     },
    text: {
        fontSize: 26
    }
})