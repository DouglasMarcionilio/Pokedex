import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get("window");


const pokecardStyle = (props) => StyleSheet.create({
    viewPai: {
        height: height *.31,
        width: width / 2,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        height: height * .28,
        width: width / 2.1,
        borderRadius: 20,
        borderColor: 'white',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: props,
    },
    pkmImage:{
        width: '80%',
        height: '75%',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 100,
    },
    pkmName: {
        color: 'black',
        fontSize: height * .035,
        paddingTop: 5,
        fontFamily: 'dongle_bold',
    }
});

export default pokecardStyle;