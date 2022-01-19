import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const {height, width} = Dimensions.get("window");

const homeStyle = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    upside: {
        width: '100%',
        height: '15%',
        backgroundColor: '#ff5050',
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        elevation: 10,
        marginBottom: 10
    },
    logoImg: {
        height: height * .08,
        width: height * .08,
    },
    
});

export default homeStyle;