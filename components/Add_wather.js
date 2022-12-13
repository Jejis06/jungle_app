import React, { Component,useState } from "react";
import BACK from "./micro-components/back"
import {
    StyleSheet,Text,View,
    TouchableOpacity, Dimensions
} from "react-native";

const W_MOD = Dimensions.get('window').width;
const H_MOD = Dimensions.get('window').height;

const ADD = (props) => {
    
    const [glass_amm,set_amm] = useState(250);

    const Close = (bool, data) => {
        props.vis(bool);
        props.data(data);
        
    }
    const add_wather = (amm) => {
        //set_amm(500);
        if((glass_amm + amm) < 0){
            set_amm(0);
        }
        else{
            set_amm(glass_amm + amm);

        }
        

    };

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
                        <Text>{glass_amm}ml</Text>
                    </View>
                    
                    <View style={styles.buttons}>
                        {/*     -        */}
                        <TouchableOpacity onPress={() => add_wather(-50)} style={styles.button}><Text style={styles.button_text}>-</Text></TouchableOpacity>
                        {/*     +        */}
                        <TouchableOpacity onPress={() => add_wather(50)} style={styles.button}><Text style={styles.button_text}>+</Text></TouchableOpacity>
                    
                    </View>
                    <TouchableOpacity onPress={() => Close(false,glass_amm)} style={styles.add_button}><Text style={styles.button_text}>Dodaj</Text></TouchableOpacity>
                
                </View>
                
            </View>
           

    </TouchableOpacity>
    )
    

}

const styles = StyleSheet.create({
    /*      working button that applies stuff       */
    add_button:{
        width: "60%",
        height: W_MOD/6,
        backgroundColor: '#24A',
        marginTop:50,
        marginBottom: 54,
        borderRadius: 42,
        alignItems: 'center',
        justifyContent: 'center'
    },
    /*     + - buttons styling        */
    button_text:{
        fontSize: 24,
        fontFamily: "Hreg",

    },
    button:{
        backgroundColor: '#24A',
        borderRadius: 90,
        width: W_MOD/6,
        height: W_MOD/6,
        
        marginHorizontal:9,
        alignItems: 'center',
        justifyContent: 'center'

    },
    buttons:{
        flexDirection:"row",
        justifyContent: 'space-between',
        
        
    },

    /*     Glass        */
    glass_big:{
        marginTop:55,
        marginBottom:29,
        backgroundColor: '#24A',
        width:"28%",
        height:"32%",

        alignItems: 'center',
        justifyContent: 'center'
    },
     /*     title        */
    title:{
        color: 'black',
        letterSpacing:5,
        fontSize:30,
        textAlign:'center',
        fontWeight:'bold',
        fontFamily: "Hbold",
        
    },

     /*     container of title Glass and +- buttons        */
    content:{
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        
        justifyContent: 'space-around',
    },
    
     /*     header with back button        */
    header:{
        height:"9%",
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        paddingTop:14,
        paddingHorizontal:22,       
       
    },

     /*     wrapper         */
    modal: {
        height:"85%",
        width: "90%",
        backgroundColor: '#FFFF',
        borderRadius: 44,
    },

     /*     container of all elements */       
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
})
export default ADD;