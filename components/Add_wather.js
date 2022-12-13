import React, { Component } from "react";
import colors from '../assets/colors/colors';
import BACK from "./micro-components/back"
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Image
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
        <TouchableOpacity disabled={true} style={styles.container}>
            <View style={styles.modal}>
                 {/* backbutton */}
                 <View style={styles.header}>
                    <BACK Close={Close}/>
                 </View>
                <View style={styles.content}>
                    <Text style={styles.title}>Dodaj Wypite</Text>
                    
                    <View style={styles.glass_big}>
                        <Image style={styles.glass_img}
                            source={require('../assets/szklanka4.png')}
                        />
                    <TouchableOpacity onPress={decreaseGlassSize}>
                        <View style={styles.plus_minus_button}>
                            <Text style={styles.inner_text}> - </Text>
                        </View>
                    </TouchableOpacity>
                
                </View>
                
            </View>
           

    </TouchableOpacity>
)}

const styles = StyleSheet.create({
    glass_big:{
        marginTop:55,
        marginBottom:29,
        // backgroundColor: '#24A',
        
        alignItems: 'center',
        justifyContent: 'center',

        width:"28%",
        height:"32%",
    },

    glass_img:{
        height: "110%",
        width: "110%"
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
       
    },

    plus_minus_button:{
        //height:"10%",
        // width:"10%",

        // flexDirection: 'column',
        // flex: 0.1,

        // justifyContent: 'center',
        // alignContent: 'center',

        backgroundColor: colors.Primary,

        padding: "3%",
        borderRadius: 100,
    },
    
})
export default ADD;