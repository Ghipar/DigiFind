import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

const SearchBar = ({ placeholder }) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.TextInput} placeholder={placeholder}></TextInput>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    TextInput: {
        paddingHorizontal: 20,
        paddingVertical: 4,
        color: 'black'
    },
    container: {
        backgroundColor: '#EEEDEB',
        marginHorizontal: 10
    }
})