import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get("window");

const pokecardStyle = StyleSheet.create({
    viewPai: {
        height: height *.31,
        width: width / 2,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        height: height * .28,
        width: width / 2.1,
        backgroundColor: 'rgba(255,0,0,0.4)',
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    pkmImage:{
        width: '80%',
        height: '75%',
        justifyContent: "center",
        alignItems: "center",
    },
    pkmName: {
        color: 'white',
        fontSize: height * .035,
        paddingTop: 5,
        fontFamily: 'dongle_bold',
    }
});

export default pokecardStyle;