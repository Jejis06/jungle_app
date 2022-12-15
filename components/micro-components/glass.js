import {ImageBackground, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import colors from '../../assets/colors/colors';


const Glass = (prop) => {
    const backgroundImage = require('../../assets/szklanka4.png');
    return (
        <ImageBackground style={styles.glass_inactive} source={backgroundImage} resizeMode="cover">
            <View style={styles.glass_active} height = {prop.level}></View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
     //level of wather per unit
     glass_active:{
        position: 'absolute',
        bottom:0,
        width:'100%',
        height:'0%',
        //backgroundColor:colors.Thirdary,
    },
    glass_inactive:{
        width:26,
        height:44,
        //backgroundColor:colors.lightGray,
        marginHorizontal:9,

    },
});

export default Glass;