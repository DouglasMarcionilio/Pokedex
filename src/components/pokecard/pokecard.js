import React from "react";
import { View, Text } from "react-native";
import pokecardStyle from "./style";
import { pokeImage } from "../../services/api";
import { SvgFromUri } from 'react-native-svg';
import {getPokeData} from '../../services/api';

class Pokecard extends React.Component{

    state = {
        type: '',
    }

    capitalize(){
        return this.props.dados.name.charAt(0).toUpperCase() + this.props.dados.name.slice(1);
    }

    idPokemon(){
        const init = this.props.dados.url.split('/');
        return init[6];
    }

    imageUrl(){
        return pokeImage(this.idPokemon());
    }

    async pokeType(){
        const response = await getPokeData.get(this.idPokemon());
        const types = response.data.types[0].type.name;

        this.setState({
            type: types
        });
    }

    bgColor(){
        const colors = {
            fire: '#F8DFDF',
            grass: '#DEFDE0',
            electric: '#FCF7DE',
            water: '#DEF3FD',
            ground: '#f4e7da',
            rock: '#d5d5d4',
            fairy: '#fceaff',
            poison: '#98d7a5',
            bug: '#f8d5a3',
            dragon: '#97b3e6',
            psychic: '#eaeda1',
            flying: '#F5F5F5',
            fighting: '#E6E0D4',
	        normal: '#F5F5F5'
    };
        return colors;

    }

    render(){
        if(this.state.type === ''){
            this.pokeType();
        }
        const c = this.bgColor()[this.state.type];
        return (
            <View style={pokecardStyle().viewPai}>
                <View style={[pokecardStyle(c).container]}>
                    <View style={pokecardStyle().pkmImage}>
                        <SvgFromUri uri={this.imageUrl()} height={'90%'} width={'90%'}/>
                    </View>
                    <Text style={pokecardStyle().pkmName}>{this.capitalize()}</Text>
                </View>
            </View>
        );
            
    };
}

export default Pokecard;