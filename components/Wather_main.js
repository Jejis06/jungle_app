import {ImageBackground, StyleSheet, Text, Touchable, TouchableOpacity, View, Modal ,Pressable,Dimensions} from 'react-native';
import React,{useState, useEffect} from 'react';
import colors from '../assets/colors/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import Glass from './micro-components/glass';
import SET from  './settings_wather';
import {readData,writeData,database , templates,clear } from './database_controller';
import Svg, { Circle, Path } from "react-native-svg";
import Animated, {
    Easing,
    interpolate,
    useAnimatedProps,
    useSharedValue,
    withRepeat,
    withTiming,
  } from "react-native-reanimated";
  

const W = Dimensions.get('screen').width;
const H = Dimensions.get('screen').height;

//woda
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedSvg = Animated.createAnimatedComponent(Svg);


const Wather = () => {
    
    const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

    const [DRUNK, adddrunk] = useState(0); // ile wypil uzytkowinik
    const set_DRUNK = (amm) => {
        adddrunk(amm);
    }
    
    const [COMPLETE, setcomplete] = useState(0); // ile procent celu osiągnął uzytkownik  

    

    const [GLASS_AMM, setGlassAmm] = useState(5);

    const [WATHER_LIMIT,setwatherlimit] = useState(2000);
    const set_WATHER_LIMIT = (amm) => {
        setwatherlimit(amm);
    }

    
    const [WATHER_PER_GLASS,setwatherpergl] = useState(250);
     const set_WATHER_PER_GLASS = (amm) => {
        setwatherpergl(amm);
    }

    const [GLASS_ARR,ARR] = useState(Array(GLASS_AMM).fill('0%')); // ile szklanek

    //modals
    const [ADD_WATHER_MENU_VISIBLE, addvisible] = useState(false);
   
    const SetAddVisible = (bool) => {addvisible(bool)}

    //settings
    const [SET_WATHER_MENU_VISIBLE, setvisible] = useState(false);

    const SetSetVisible = async (bool) =>{
        setvisible(bool);
        if(bool == false){
            percentage(0);
            handle_animation(DRUNK);
        }
        const current = new Date();        

        await writeData(database.glass,{amm:WATHER_PER_GLASS});
        await writeData(database.limit,{amm:WATHER_LIMIT});
        await writeData(database.drunk,{amm:DRUNK, date:`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`});
    }

    //rest
    const add_one_glass = async () => {
        await set_DRUNK( DRUNK + WATHER_PER_GLASS);
        const current = new Date();
        
        //adddrunk(0);
        await percentage(WATHER_PER_GLASS);
        //add_to_arr();
        await handle_animation(DRUNK + WATHER_PER_GLASS);

        await writeData(database.drunk,{amm:DRUNK+ WATHER_PER_GLASS, date:`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`});
    };
    

    const dec_one_glass = async () => {
        const current = new Date();
        if(DRUNK - WATHER_PER_GLASS > 0){
            await set_DRUNK( DRUNK - WATHER_PER_GLASS);
            await writeData(database.drunk,{amm:DRUNK- WATHER_PER_GLASS, date:`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`});
            await percentage(-WATHER_PER_GLASS);
            await handle_animation(DRUNK - WATHER_PER_GLASS)
        }

        else{
            await set_DRUNK(0);
            await writeData(database.drunk,{amm:0, date:`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`});
            await percentage(-DRUNK);
            await handle_animation(0);
        }
    };

    //animation
    const handle_animation = (amm) => {
        buttonStrokeAnimated.value = 0;
        waveAnimated.value = 5;

        buttonStrokeAnimated.value = withTiming(1, {
        duration: 600,
        easing: Easing.ease,
        });
        waveAnimated.value = withRepeat(
        withTiming(17, {
            duration: 700,
            easing: Easing.ease,
        }),
        2,
        true
        );
        heighAnimated.value = withTiming(clamp((H*1.2 * clamp(parseInt((amm)/WATHER_LIMIT * 100),0,100)/100),100,100000000), {
        duration: 1000,
        easing: Easing.ease,
        });
    }

    //calculate percentage
    const percentage = (amm) => {
        setcomplete(clamp(parseInt((DRUNK + amm)/WATHER_LIMIT * 100),0,100));
    }

    Feather.loadFont();
    
    useEffect(() => {
        console.log('useEffect ran');



        async function data(){
            //clear();
            const current = new Date();
            const now = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

            for (var key in database){
                
                //console.log(database[key],templates[key]);
                if(await readData(database[key]) === null){
                    writeData(database[key],templates[key]);
                    
                }
            }
    
            const wl = await readData(database.limit);
            const pgl = await readData(database.glass);
            const drk = await readData(database.drunk);
            
            console.log(database.glass,pgl);
            console.log(database.limit,wl);
            console.log(database.drunk,drk);
            
            await set_WATHER_LIMIT(wl.amm);
            await set_WATHER_PER_GLASS(pgl.amm);


            
            if(now ==drk.date ){
                await set_DRUNK(drk.amm);
                setcomplete(clamp(parseInt((drk.amm + 0)/wl.amm * 100),0,100));

            
                buttonStrokeAnimated.value = 0;
                waveAnimated.value = 5;

                buttonStrokeAnimated.value = withTiming(1, {
                duration: 600,
                easing: Easing.ease,
                });
                waveAnimated.value = withRepeat(
                withTiming(17, {
                    duration: 700,
                    easing: Easing.ease,
                }),
                2,
                true
                );
                heighAnimated.value = withTiming(clamp((H*1.2 * clamp(parseInt((drk.amm )/wl.amm * 100),0,100)/100),100,100000000), {
                duration: 1000,
                easing: Easing.ease,
                });
            }
                
            else{
                await set_DRUNK(0);
                setcomplete(clamp(parseInt((0)/wl.amm * 100),0,100));

            
                buttonStrokeAnimated.value = 0;
                waveAnimated.value = 5;

                buttonStrokeAnimated.value = withTiming(1, {
                duration: 600,
                easing: Easing.ease,
                });
                waveAnimated.value = withRepeat(
                withTiming(17, {
                    duration: 700,
                    easing: Easing.ease,
                }),
                2,
                true
                );
                heighAnimated.value = withTiming(clamp((H*1.2 * clamp(parseInt((0)/wl.amm * 100),0,100)/100),100,100000000), {
                duration: 1000,
                easing: Easing.ease,
                });
            }
        }

        data();      
    },[]);

    // const backgroundImage = require('../assets/jungla.jpg');

    //ANIMACJE
    const heighAnimated = useSharedValue(100);
    const waveAnimated = useSharedValue(5);
    const buttonStrokeAnimated = useSharedValue(0);
    const firstWaveProps = useAnimatedProps(() => {
        return {
        d: `
            M 0 0
            Q 45 ${waveAnimated.value} 90 10
            T 180 0
            T 270 0
            T 360 0
            T 900 0
            T 540 0
            V ${heighAnimated.value}
            H 100
            Z
        `,
        };
    });

    const secondWaveProps = useAnimatedProps(() => {
        return {
        d: `
            M 0 0
            Q 45 ${waveAnimated.value + 10} 90 0
            T 180 0
            T 270 0
            T 360 0
            T 900 0
            T 540 0
            V ${heighAnimated.value}
            H 10
            Z
        `,
        };
    });

    const SVGProps = useAnimatedProps(() => {
        return {
        height: heighAnimated.value,
        viewBox: `0 0 ${W} ${heighAnimated.value}`,
        };
    });

   
    return (
        /*<ImageBackground style={styles.container} source={backgroundImage} resizeMode="cover">*/
            <SafeAreaView style={styles.container}>
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

                        // emi
                        setGlassAmm = {() => checkGlassAmm()}
                    />
                </Modal>               

                {/* setting bar */}               

                {/* info */}
                <View style={styles.ammount_container}>
                    <Text style={styles.ammount_text}>{DRUNK} ml</Text>
                    {/* 

                    <View style={styles.glasses}>
                        {
                            GLASS_ARR.map((item,index) => {
                                return <Glass key={index} level={item}/>
                            })
                        }
        
                    </View>
                    
                    */}                    
                </View>

                {/* flow */}               
                <View style={styles.level_wrapper}>
                    {/*<View style={[styles.wather_level,{height: `${COMPLETE-10}%`}]}></View>*/}
                    <AnimatedSvg position={"absolute"} bottom={0} width={W} animatedProps={SVGProps}>
                        <AnimatedPath
                            animatedProps={firstWaveProps}
                            fill={colors.watherbg}
                            transform="translate(0,10)"
                        />

                        <AnimatedPath
                            animatedProps={secondWaveProps}
                            fill={colors.watherfg}
                            transform="translate(0,15)"
                        />
                    </AnimatedSvg>

                    <View style={[styles.spheres]}>
                    <TouchableOpacity  
                            style={[styles.addWathersphere, styles.shadow]}
                            onPress={() => dec_one_glass()}
                        >
                            <Text style={styles.addtxt}>-</Text>
                            
                        </TouchableOpacity>
                    <TouchableOpacity  
                            style={[styles.addWathersphere, styles.shadow]}
                            onPress={() => add_one_glass()}
                        >
                            <Text style={styles.addtxt}>+</Text>
                            
                        </TouchableOpacity>
                        
                        
                    </View>
                    
                </View>

                <Text style={[styles.percentage_text, styles.shadow]}>{COMPLETE}%</Text>
                <TouchableOpacity  
                    style={styles.headerWrapper}
                    onPress={() => SetSetVisible(true)}
                >
                    <Feather name="cog" size={W/9} color={colors.gray} />
                </TouchableOpacity>
            </SafeAreaView>      
        //</ImageBackground>
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
        position:'absolute',
        right:0,
        paddingTop:20,
        paddingHorizontal:34,
        alignItems: 'center',
    },
    
    ammount_container:{
        flexDirection:'column',        
        alignItems: 'center',
        marginTop:102,
    },

    ammount_text:{
       
        fontFamily: "Hreg",
        color:colors.Primary,
        fontSize:W/10,
        letterSpacing:5,
    },

    glasses:{
        flexDirection:'row', 
        marginTop:24,
        alignItems:'center',
        
    },

    percentage_text:{
        position:'absolute',
        top:'30%',
        marginTop:62,
        textAlign:'center',
        fontWeight:'bold',
        fontFamily: "Hbold",
        color:colors.foregroundGRAY,
        fontSize:W/5,
        width:'100%',
    },
    level_wrapper:{
        flex:1,       
        alignItems: 'center',
    },
   
    addWathersphere:{
        top:'80%',
        borderRadius:90,
        width:W/4.5,
        height:W/4.5,
        backgroundColor:colors.lightGray,
        justifyContent:'center',
        marginHorizontal:50,

    },
    spheres:{
        marginVertical:100,
        flexDirection:'row', 
        alignItems: 'center',
        justifyContent:"space-around",

    },

    addtxt:{
        textAlign: 'center',
        color:colors.foregroundGRAY,
        fontSize:60,
        fontFamily: "Hreg",
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
})


export default Wather;