import React, {useState} from "react";
import colors from '../assets/colors/colors';
import BACK from "./micro-components/back"
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const W_MOD = Dimensions.get('window').width - 80;
const H_MOD = 150;

const SET = (props) => {
    const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

    const Close = (bool) => {
        props.vis(bool);
    }
    

    const[glassSize, setGlassSize] = useState(props.wather_per_glass);
    const modifyGlassSize = (amm) =>{
        setGlassSize(clamp((glassSize + amm), 50,500));
        props.set_wather_per_glass(clamp((glassSize + amm), 50,500));
    }

    const[goal, setGoal] = useState(props.wather_goal);

    const modifyGoal = (amm) =>{
        setGoal(clamp(goal + amm, 50,3000));        
        props.set_goal(clamp(goal + amm, 50,3000));
    }

    

    return (
        <TouchableOpacity disabled={true} style={styles.container}>

            <View style={styles.modal}>

                    <View style={styles.header}>
                        <BACK Close={Close}/>
                    </View>

                    <View style={[styles.content, {paddingBottom: "20%", paddingTop: "5%"}]}>
                        <Text style={styles.title}>Wielkość szklanki:</Text>
                        <Text style={[styles.title, styles.milliliters]}>{glassSize} ml</Text>
                        <View style={styles.buttons}>

                            <TouchableOpacity onPress={() => modifyGlassSize(50)}>
                                <View style={styles.plus_minus_button}>
                                    <Text style={styles.inner_text}> + </Text>
                                </View>
                            </TouchableOpacity>
                            
                            <TouchableOpacity onPress={() => modifyGlassSize(-50)}>
                                <View style={styles.plus_minus_button}>
                                    <Text style={styles.inner_text}> - </Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={styles.content}>
                        <Text style={styles.title}>Docelowa ilość wody:</Text>
                        <Text style={[styles.title, styles.milliliters]}>{goal} ml</Text>
                        <View style={styles.buttons}>

                            <TouchableOpacity onPress={() => modifyGoal(50)}>
                                <View style={styles.plus_minus_button}>
                                    <Text style={styles.inner_text}> + </Text>
                                </View>
                            </TouchableOpacity>
                            
                            <TouchableOpacity onPress={() => modifyGoal(-50)}>
                                <View style={styles.plus_minus_button}>
                                    <Text style={styles.inner_text}> - </Text>
                                </View>
                            </TouchableOpacity>
                            
                        </View>
                    </View>

            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    // back button
    header:{
        height:"9%",

        flexDirection: 'row-reverse',
        // justifyContent: 'space-between',

        paddingTop:14,
        paddingHorizontal:22,       
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

    content:{
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',        
        justifyContent: 'space-around',
    },    

    title:{
        color: 'black',
        letterSpacing: 2,
        fontSize:30,
        textAlign:'center',
        fontWeight:'bold',
        fontFamily: "Hbold",
    },

    milliliters:{
        fontSize: 35,
        color: colors.Primary,
        letterSpacing:4,
    },

    buttons:{
        flexDirection: 'row',
        width: "100%",

        //backgroundColor: 'red',

        alignItems: 'space-around',        
        justifyContent: 'space-around',        
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

    inner_text:{
        fontSize: 45,
        color: 'white',
        fontWeight: 'bold',
        
    },

    

    opac:{
        // alignItems: 'space-around',        
        // justifyContent: 'space-around',
    }


    
    
})

export default SET;
