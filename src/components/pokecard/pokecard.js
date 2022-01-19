import React from "react";
import { View, Text } from "react-native";
import pokecardStyle from "./style";
import { pokeImage } from "../../services/api";
import { SvgFromUri } from 'react-native-svg'

class Pokecard extends React.Component{

    capitalize(){
        return this.props.dados.name.charAt(0).toUpperCase() + this.props.dados.name.slice(1);
    }

    imageUrl(){
        const init = this.props.dados.url.split('/');
        return pokeImage(init[6]);
    }

    render(){
        console.log(this.imageUrl());
        return (
            <View style={pokecardStyle.viewPai}>
                <View style={pokecardStyle.container}>
                    <View style={pokecardStyle.pkmImage}>
                        <SvgFromUri uri={this.imageUrl()} width={'90%'}/> 
                    </View>
                    <Text style={pokecardStyle.pkmName}>{this.capitalize()}</Text>
                </View>
            </View>
        );
            
    };
}

export default Pokecard;