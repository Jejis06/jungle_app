import React from "react";
import {
    StyleSheet,Text,View,
    TouchableOpacity, Dimensions
} from "react-native";

const W_MOD = Dimensions.get('window').width - 80;
const H_MOD = 150;

const SET = (props) => {
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
            <TouchableOpacity
                onPress={() => Close(false,"jes")}
            >
                <Text>łoter settings</Text>
            </TouchableOpacity>

        </View>

    </TouchableOpacity>
    )
    

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        height:'100%',
        width:'100%',
        paddingTop:10,
        backgroundColor: '#FFFF',
        borderRadius: 10,
    }
})
export default SET;