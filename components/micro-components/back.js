import React, { Component } from "react";
import {
    StyleSheet,Text,View,
    TouchableOpacity, Dimensions
} from "react-native";


const back = (props) => {
    return (
        <TouchableOpacity
            onPress={() => props.Close(false,"")}
            style={styles.back}>
        </TouchableOpacity>
    )

}
const styles = StyleSheet.create({
    back:{
        width:'33%',
        height:'100%',
        backgroundColor: '#24A',
        borderRadius: 34,
    }
})

export default back;