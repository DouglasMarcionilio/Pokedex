import React from "react";
import {View, Text, Image} from "react-native";
import TouchHistoryMath from "react-native/Libraries/Interaction/TouchHistoryMath";
import Pokecard from "../../components/pokecard/pokecard";
import Pokelist from "../../components/pokelist/pokelist";
import { api, initalPoksUrl } from "../../services/api";
import homeStyle from "./style";

class Home extends React.Component{

    render(){
        return (
            <View style={homeStyle.screenContainer}>
                <this.UpSide />
                <Pokelist/>
            </View>
        );
    }

    UpSide(){
        return (
            <View style={homeStyle.upside}>
                <Image source={require('../../assets/pokeball.png')} style={homeStyle.logoImg}/>
            </View>
        );
    }
}

export default Home;