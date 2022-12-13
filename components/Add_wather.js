import React, { Component } from "react";
import BACK from "./micro-components/back"
import {
    StyleSheet,Text,View,
    TouchableOpacity, Dimensions
} from "react-native";

const W_MOD = Dimensions.get('window').width;
const H_MOD = Dimensions.get('window').height;

const ADD = (props) => {
    const fetchFonts = async () =>
    await Font.loadAsync({
        'Hbold': require('../assets/fonts/Heebo-Bold.ttf'),
        'Hreg': require('../assets/fonts/Heebo-Regular.ttf'),
    });

    const Close = (bool, data) => {
        props.vis(bool);
        props.data(data);
        
    }

    return (
        <TouchableOpacity
            disabled={true}
            style={styles.container}
        >
            <View style={styles.modal}>
                 {/* backbutton */}
                 <View style={styles.header}>
                    <BACK Close={Close}/>
                 </View>
                <View style={styles.content}>
                    <Text style={styles.title}>Dodaj Wypite</Text>
                    
                    <View style={styles.glass_big}>
                        <Text>250ml</Text>
                    </View>
                    
                    <View style={styles.buttons}>

                    
                    </View>
                    <TouchableOpacity style={styles.add}>

                    </TouchableOpacity>
                
                </View>
                
            </View>
           

    </TouchableOpacity>
    )
    

}

const styles = StyleSheet.create({
    glass_big:{
        marginTop:55,
        marginBottom:29,
        backgroundColor: '#24A',
        width:"28%",
        height:"32%",
    },
    title:{
        color: 'black',
        letterSpacing:5,
        fontSize:30,
        textAlign:'center',
        fontWeight:'bold',
        fontFamily: "Hbold",
    },
    content:{
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        
        justifyContent: 'space-between',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        height:"85%",
        width: "90%",
        backgroundColor: '#FFFF',
        borderRadius: 44,
    },
    header:{
        height:"9%",
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        paddingTop:14,
        paddingHorizontal:22,       
       
    }
    
})
export default ADD;