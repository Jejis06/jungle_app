import { StyleSheet, Text, Touchable, TouchableOpacity, View, Modal ,Pressable,Dimensions} from 'react-native';
import React,{useState} from 'react';
import colors from '../assets/colors/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import Glass from './micro-components/glass'
import SET from  './settings_wather'

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;
const GLASS_AMM = 5;

const Wather = () => {
    const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
    
    
    const [DRUNK, adddrunk] = useState(0); // ile wypil uzytkowinik
    const [COMPLETE, setcomplete] = useState(0); // ile procent celu osiągnął uzytkownik
    
    


    const [WATHER_LIMIT,setwatherlimit] = useState(2000);
    const set_WATHER_LIMIT = (amm) => {
        setwatherlimit(amm);
    }


    const [WATHER_PER_GLASS,setwatherpergl] = useState(250);
     const set_WATHER_PER_GLASS = (amm) => {
        console.log(amm);
        setwatherpergl(amm);
    }

    
    const [GLASS_ARR,ARR] = useState(Array(GLASS_AMM).fill('0%')); // ile szklanek
    const add_to_arr = () => {
        for(let i=0;i< GLASS_ARR.length;i++){
            console.log(parseInt(GLASS_ARR[i].split('%')[0]));
        }
    }
    
    //modals

    const [ADD_WATHER_MENU_VISIBLE, addvisible] = useState(false);
   
    const SetAddVisible = (bool) =>{
        addvisible(bool)
        
    }
    //settings

    const [SET_WATHER_MENU_VISIBLE, setvisible] = useState(false);
    const SetSetVisible = (bool) =>{
        setvisible(bool)
    }

    //rest
    const add_one_glass = () => {
        
        adddrunk( DRUNK + WATHER_PER_GLASS);
        
        //adddrunk(0);
        percentage(WATHER_PER_GLASS);
        add_to_arr();
    };
    //calculate percentage
    const percentage = (amm) => {
        setcomplete(clamp(parseInt((DRUNK + amm)/WATHER_LIMIT * 100),0,100));  
        
              
    }
   
    Feather.loadFont();
    return (
        <View style={styles.container} onLoad={() => create_glases()}>
            
            <SafeAreaView style={styles.container}>
                {/* Popup windows */}
                {/*wather glass */}
                
                {/*settings */}
                <Modal 
                        transparent={true}
                        animationType="fade"
                        visible={SET_WATHER_MENU_VISIBLE}
                        onRequestClose={() => SetSetVisible(false)}
                    >
                        <SET
                            vis={SetSetVisible} // visible checkbox
                            

                            set_wather_per_glass = {set_WATHER_PER_GLASS}
                            set_goal = {set_WATHER_LIMIT}

                            wather_per_glass = {WATHER_PER_GLASS}
                            wather_goal = {WATHER_LIMIT}
                        />
                </Modal>
                


                {/* setting bar */}
                 

                <TouchableOpacity  
                    style={styles.headerWrapper}
                    onPress={() => SetSetVisible(true)}
                >
                    <Feather name="cog" size={40} color={colors.gray} />
                </TouchableOpacity>

                {/* info */}

                <View style={styles.ammount_container}>
                    <Text style={styles.ammount_text}>{DRUNK} ml</Text>
                    <View style={styles.glasses}>
                        {
                            GLASS_ARR.map((item,index) => {
                                return <Glass key={index} level={item}/>
                            })
                        }
        
                    </View>
                </View>

                {/* flow */}

                

                <View style={styles.level_wrapper}>
                    <View style={[styles.wather_level,{height: `${COMPLETE-10}%`}]}></View>
                    
                    <TouchableOpacity  
                        style={styles.addWathersphere}
                        onPress={() => add_one_glass()}
                    >
                        <Text style={styles.addtxt}>+</Text>
                        
                    </TouchableOpacity>
                </View>

                <Text style={styles.percentage_text}>{COMPLETE}%</Text>
                
            </SafeAreaView>      
        </View>
    )
};

const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        backgroundColor:colors.background,
        
    },
    headerWrapper: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        
        paddingTop:20,
        paddingHorizontal:34,
        alignItems: 'center',
    },
    
    ammount_container:{
        flexDirection:'column',        
        alignItems: 'center',
        marginTop:12,
    },
    ammount_text:{
       
        fontFamily: "Hreg",
        color:colors.Primary,
        fontSize:30,
        letterSpacing:5,
    },

    glasses:{
        flexDirection:'row', 
        marginTop:24,
        alignItems:'center',
        
    },
   
   //update
    percentage_text:{
        position:'absolute',
        top:'30%',
        marginTop:62,
        textAlign:'center',
        fontWeight:'bold',
        fontFamily: "Hbold",
        color:colors.Primary,
        fontSize:70,
        width:'100%',
    },
    level_wrapper:{
        flex:1,       
        alignItems: 'center',
    },
    wather_level:{
        position:'absolute',
        backgroundColor:colors.Thirdary,
        width:'100%',
        bottom:0,
    },
    addWathersphere:{
        top:'60%',
        borderRadius:90,
        width:W/3,
        height:W/3,
        backgroundColor:colors.lightGray,
        justifyContent:'center',
    },
    addtxt:{
        textAlign: 'center',
        color:colors.foregroundGRAY,
        fontSize:70,
        fontFamily: "Hreg",
    }
})


export default Wather;