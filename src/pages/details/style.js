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
        height: '15%',
        justifyContent: "flex-end",
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
        width: '70%',
        height: '10%',
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        alignSelf:"center"
    },
    viewTitleSub: {
        justifyContent: "space-around",
        alignItems: "center",
    },
    title:{
        color: 'white',
        fontWeight: "bold",
        fontSize: 23,
        fontFamily: 'dongle_bold',
    },
    subTitle: {
        color: 'gray',
        fontSize: 21,
        fontFamily: 'dongle_bold',
    },
    statusView: {
        flex: 1,
    },
    statsTitle: {
        color: 'white',
        fontWeight:"bold",
        fontSize: 23,
        alignSelf: "center",
    },
    detailedStatsView: {
        height: '40%',
        marginTop: 15,
        justifyContent: "space-around",
        alignItems: "center",
    },
    statsView: {
        flexDirection: "row",
    },
    statsName: {
        color: 'white',
        fontWeight: "bold",
        fontFamily: 'dongle_bold',
        marginRight: 10,
    },
    valuesView: {
        width: '70%',
        height: '65%',
        backgroundColor: 'white',
        borderRadius: 20,
        marginLeft: 10
    },
    value: {
        flex: 1,
        borderRadius: 20,
        alignItems: "flex-end",
        justifyContent: "center",
    },
    textValue: {
        color: 'black',
        fontWeight: "bold",
        fontSize: 10,
        marginEnd: 10,
    }
});

export default style;
