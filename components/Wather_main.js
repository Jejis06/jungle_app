import { StyleSheet, Text, Touchable, TouchableOpacity, View, Modal ,Pressable,Dimensions} from 'react-native';
import React,{useState} from 'react';
import colors from '../assets/colors/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import Glass from './micro-components/glass'
import SET from  './settings_wather'

const W = Dimensions.get('window').width;

const Wather = () => {
    const fetchFonts = async () =>
    await Font.loadAsync({
      'Hbold': require('../assets/fonts/Heebo-Bold.ttf'),
      'Hreg': require('../assets/fonts/Heebo-Regular.ttf'),
  });
    
    const [AMM, set] = useState();
    const [WATHER_LIMIT,setwatherlimit] = useState();
    const [WATHER_PER_GLASS,setwatherpergl] = useState();


    const set_WATHER_PER_GLASS = (amm) => {
        setwatherpergl(amm);
    }
    const set_WATHER_LIMIT = (amm) => {
        setwatherlimit(amm);
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

    Feather.loadFont();
    return (
        <View style={styles.container}>
            
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
                            vis={SetSetVisible}
                            data={set_WATHER_LIMIT}
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
                    <Text style={styles.ammount_text}>300 ml</Text>
                    <View style={styles.glasses}>
                        <Glass level='80%'/>
                        <Glass/>
                        <Glass/>  
                        <Glass/>  
                        <Glass/>                      
    
                    </View>
                </View>

                {/* flow */}

                

                <View style={styles.level_wrapper}>
                    <View style={styles.wather_level}></View>

                    <TouchableOpacity  
                        style={styles.addWathersphere}
                        onPress={() => SetAddVisible(true)}
                    >
                        <Text style={styles.addtxt}>+</Text>
                        
                    </TouchableOpacity>
                </View>

                <Text style={styles.percentage_text}>100%</Text>
                
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
        height:'90%',
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