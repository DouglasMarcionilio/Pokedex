import React from "react";
import { StyleSheet } from "react-native";

const style = (props) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0d0d0d',
    },
    topMenu: {
        backgroundColor: props,
        width: '100%',
        height: '30%',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
    },
    rowTopMenu: {
        flexDirection:"row",
        width: '100%',
        height: '20%',
        justifyContent: "space-between",
    },
    imgView: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    iconBackView: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 5
    },
    idBackView: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 5
    },
    pokedexTitle: {
        fontSize: 18, 
        color: 'white', 
        fontWeight: "bold",
        marginLeft: 10
    },
    nameMovesView: {
        width: '100%',
        height: '20%',
        justifyContent: "center",
        alignItems: "center",
    },
    nameStyle: {
        color: 'white',
        fontWeight: "bold",
        fontSize: 25,
    },
    typeView: {
        flexDirection: "row",
        width: '70%',
        justifyContent: "space-between",
        alignItems: "center",
    },
    typeCard: {
        width: '45%',
        height: '50%',
        backgroundColor: 'white',
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    typeCardText: {
        color: props,
        fontWeight: "bold",
    },
    pesoAlturaView: {
        width: '100%',
        height: '10%',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    viewTitleSub: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 7,
        marginRight: 7,
    },
    title:{
        color: 'white',
        fontWeight: "bold",
        fontSize: 20,
        fontFamily: 'dongle_bold',
    },
    subTitle: {
        color: 'gray',
        fontSize: 18,
        fontFamily: 'dongle_bold',
    }
});

export default style;
