import React, { Component } from "react";
import {
    StyleSheet,Text,View,
    TouchableOpacity, Dimensions
} from "react-native";



const back = (props) => {
    return (
        <TouchableOpacity
            onPress={() => props.Close(false)}
            style={styles.back}>
                <Text style={styles.backText}>
                    Cofnij
                </Text>
        </TouchableOpacity>
    )

}
const styles = StyleSheet.create({
    back:{
        width:'25%',
        height:'70%',
        backgroundColor: '#24A',

        margin: "2%",
        
        borderRadius: 90,
        
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    backText:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    },

})

export default back;