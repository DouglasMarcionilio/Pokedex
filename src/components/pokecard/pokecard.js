import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import pokecardStyle from "./style";
import { pokeImage } from "../../services/api";
import { SvgFromUri } from 'react-native-svg';
import {getPokeData} from '../../services/api';

class Pokecard extends React.Component{

    state = {
        type: '',
        data: '',
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
            type: types,
            data: response.data,
        });
    }

    bgColor(){
        const colors = {
            fire: '#EE8130',
            grass: '#7AC74C',
            electric: '#F7D02C',
            water: '#6390F0',
            ground: '#E2BF65',
            rock: '#B6A136',
            fairy: '#D685AD',
            poison: '#A33EA1',
            bug: '#A6B91A',
            dragon: '#6F35FC',
            psychic: '#F95587',
            flying: '#A98FF3',
            fighting: '#C22E28',
	        normal: '#A8A77A'
    };
        return colors;
    }

    detailsPage = () => {
        this.props.navigation.navigate('Details', {
            pokeDados: this.state.data,
            bgColor: this.bgColor()[this.state.type],
            image: this.imageUrl(),
            name: this.capitalize(),
        });
    }

    render(){
        if(this.state.type === ''){
            this.pokeType();
        }
        const c = this.bgColor()[this.state.type];
        return (
            <TouchableOpacity
                onPress={this.detailsPage}
            >
                <View style={pokecardStyle().viewPai}>
                    <View style={[pokecardStyle(c).container]}>
                        <View style={pokecardStyle().pkmImage}>
                            <SvgFromUri uri={this.imageUrl()} height={'90%'} width={'90%'}/>
                        </View>
                        <Text style={pokecardStyle().pkmName}>{this.capitalize()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
            
    };
}

export default Pokecard;