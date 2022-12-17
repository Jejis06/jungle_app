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
    const ON_COLOR = colors.Secondary;

    const[glassSize, setGlassSize] = useState(props.wather_per_glass);
    const modifyGlassSize = (amm) =>{
        setGlassSize(clamp((glassSize + amm), 50,500));
        props.set_wather_per_glass(clamp((glassSize + amm), 50, 500));
    }//I waaanaa dieeeee

    // szary kolor przyciskow
    const ifButtonPlusGlassSizeLimit = () => {return (glassSize == 500) ? {backgroundColor: colors.Thirdary} : {backgroundColor: colors.lightGray};}
    const ifButtonMinusGlassSizeLimit = () => {return (glassSize == 50) ? {backgroundColor:colors.Thirdary} : {backgroundColor: colors.lightGray};}
    const ifButtonPlusGoalLimit = () => {return (goal == 3000) ? {backgroundColor: colors.Thirdary} : {backgroundColor: colors.lightGray};}
    const ifButtonMinusGoalLimit = () => {return (goal == 1000) ? {backgroundColor: colors.Thirdary} : {backgroundColor: colors.lightGray};}
    

    const[goal, setGoal] = useState(props.wather_goal);

    const modifyGoal = (amm) =>{
        setGoal(clamp(goal + amm, 1000,3000));        
        props.set_goal(clamp(goal + amm, 1000,3000));
    }

    

    return (
        <TouchableOpacity disabled={true} style={styles.container}>

            <View style={[styles.modal, styles.shadowStrong]}>

                    <View style={styles.header}>
                        <BACK Close={Close}/>
                    </View>

                    <View style={[styles.content, {paddingBottom: "20%", paddingTop: "10%"}]}>
                        <Text style={styles.title}>Wielkość szklanki:</Text>
                        <Text style={[styles.title, styles.milliliters]}>{glassSize} ml</Text>
                        <View style={styles.buttons}>

                            <TouchableOpacity onPress={() => modifyGlassSize(50)}>
                                <View style={[styles.plus_minus_button, ifButtonPlusGlassSizeLimit(), styles.shadow]}>
                                    <Text style={styles.inner_text}>+</Text>
                                </View>
                            </TouchableOpacity>
                            
                            <TouchableOpacity onPress={() => modifyGlassSize(-50)}>
                                <View style={[styles.plus_minus_button, ifButtonMinusGlassSizeLimit(), styles.shadow]}>
                                    <Text style={styles.inner_text}>-</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={[styles.content, {paddingBottom: "10%"}]}>
                        <Text style={styles.title}>Docelowa ilość wody:</Text>
                        <Text style={[styles.title, styles.milliliters]}>{goal} ml</Text>
                        <View style={styles.buttons}>

                            <TouchableOpacity onPress={() => modifyGoal(50)}>
                                <View style={[styles.plus_minus_button, ifButtonPlusGoalLimit(), styles.shadow]}>
                                    <Text style={styles.inner_text}>+</Text>
                                </View>
                            </TouchableOpacity>
                            
                            <TouchableOpacity onPress={() => modifyGoal(-50)}>
                                <View style={[styles.plus_minus_button, ifButtonMinusGoalLimit(), styles.shadow]}>
                                    <Text style={styles.inner_text}>-</Text>
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
        backgroundColor: colors.background2,
        borderColor: "#e4f3f8",
        borderWidth: 2,
        borderRadius: 44,
    },

    content:{
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',        
        justifyContent: 'space-around',
        //marginTop:30,
    },    

    title:{
        color: colors.foregroundGRAY,
        letterSpacing: 1,
        fontSize:30,
        textAlign:'center',
        fontWeight:'bold',
        fontFamily: "Hbold",
    },

    milliliters:{
        fontSize: 35,
        color: colors.lightGray,
        letterSpacing:4,
    },

    buttons:{
        flexDirection: 'row',
       
        flex: 1,

        alignItems: 'space-around',        
        justifyContent: 'space-around', 
        marginBottom: 50,       
    },

    plus_minus_button:{
       
        // flexDirection: 'column',
        // flex: 0.1,

        justifyContent: 'center',
        alignContent: 'center',
        width: W_MOD/4,
        height:  W_MOD/4,

        backgroundColor: colors.lightGray,

        //padding: "3%",
        marginHorizontal: 30,
        
        borderRadius: 90,
    },
    
    shadow:{
        // view shadow
        shadowColor: "#4196a7",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,

        // text shadow
        textShadowColor: "#4196a7",
        textShadowOffset: {
            width: 0,
            height: 1,
        },
        textShadowOpacity: 0.40,
        textShadowRadius: 3.0,
    },

    inner_text:{
        textAlign:'center',
        fontSize: 45,
        color: 'white',
        fontWeight: 'bold',    
    }, 

    shadowStrong:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
    },
})

export default SET;
