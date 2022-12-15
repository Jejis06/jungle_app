import React, { Component } from "react";
import colors from "../../assets/colors/colors";
import {
    StyleSheet,Text,View,
    TouchableOpacity, Dimensions
} from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";



const back = (props) => {
    return (
        <TouchableOpacity
            onPress={() => props.Close(false)}
            style={styles.back}>
                <Text style={styles.backText}>
                    {'>'}
                </Text>
        </TouchableOpacity>
    )

}
const styles = StyleSheet.create({
    back:{
        // width:'25%',
        // height:'70%',
        // backgroundColor: colors.Secondary,

        // margin: "2%",
        marginRight: "5%",
        
        borderRadius: 90,
        
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        
    },

    backText:{
        // fontSize: 15,
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.Secondary,
    },

})

export default back;