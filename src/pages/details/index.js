import React from "react";
import { View, Text, FlatList } from "react-native";
import style from "./style";
import { SvgFromUri } from 'react-native-svg';
import Icon from "react-native-vector-icons/Ionicons";

class Details extends React.Component{
    //this.props.route.params.pokeDados.name

    TypesCard(dados){
        console.log(dados.dados.length);
        if(dados.dados.length === 1){
            return (
                <View style={style().typeView}>
                    <View style={style().typeCard}>
                        <Text style={style().typeCardText}>{dados.dados[0].type.name.toUpperCase()}</Text>
                    </View>
                </View>
            );
        } else if(dados.dados.length === 2){
            return (
                <View style={style().typeView}>
                    <View style={style().typeCard}>
                        <Text style={style().typeCardText}>{dados.dados[0].type.name.toUpperCase()}</Text>
                    </View>
                    <View style={style().typeCard}>
                        <Text style={style().typeCardText}>{dados.dados[1].type.name.toUpperCase()}</Text>
                    </View>
                </View>
            ); 
        }
        else if(dados.dados.length === 3){
            return (
                <View style={style().typeView}>
                    <View style={style().typeCard}>
                        <Text style={style().typeCardText}>{dados.dados[0].type.name.toUpperCase()}</Text>
                    </View>
                    <View style={style().typeCard}>
                        <Text style={style().typeCardText}>{dados.dados[1].type.name.toUpperCase()}</Text>
                    </View>
                    <View style={style().typeCard}>
                        <Text style={style().typeCardText}>{dados.dados[2].type.name.toUpperCase()}</Text>
                    </View>
                </View>
            ); 
        }
        
    }

    render(){
        return (
            <View style={style().container}>
                <View style={style(this.props.route.params.bgColor).topMenu}>
                    <View style={style().rowTopMenu}>
                        <View style={style().iconBackView}>
                            <Icon name='arrow-back-outline' size={30} color={'white'}/>
                            <Text style={style().pokedexTitle}>Pokedex</Text>
                        </View>
                        <View style={style().idBackView}>
                            <Text style={style().pokedexTitle}>#{this.props.route.params.pokeDados.order}</Text>
                        </View>
                    </View>
                    <View style={style().imgView}>
                        <SvgFromUri uri={this.props.route.params.image} height={'90%'} width={'90%'}/>
                    </View>
                </View>
                <View style={style().nameMovesView}>
                    <Text style={style().nameStyle}>{this.props.route.params.name}</Text>
                    <this.TypesCard dados={this.props.route.params.pokeDados.types} />
                </View>
                <View style={style().pesoAlturaView}>
                    <View style={style().viewTitleSub}>
                        <Text style={style().title}>90.5 KG</Text>
                        <Text style={style().subTitle}>Weight</Text>
                    </View>
                    <View style={style().viewTitleSub}>
                        <Text style={style().title}>90.5 KG</Text>
                        <Text style={style().subTitle}>Weight</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default Details;