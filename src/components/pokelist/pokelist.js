import React from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import Pokecard from "../pokecard/pokecard";
import pokelistStyle from "./style";
import {api, initalPoksUrl} from '../../services/api'

class Pokelist extends React.Component{

    state = {
        poks: [],
        next: '',
        numPage: 1,
    }

    async getPoks(){
        const response = await api.get(initalPoksUrl);
        this.setState({
            poks: response.data.results,
            next: response.data.next,
        });
    }

    async morePokes(){
        const restUrl = this.state.next.split('/');
        const response = await api.get(restUrl[5]);
        this.setState({
            poks: [...this.state.poks, ...response.data.results],
            next: response.data.next,
        });
    }

    componentDidMount(){
        this.getPoks();
    }

    isCloseToBottom({layoutMeasurement, contentOffset, contentSize}){
        return layoutMeasurement.height + contentOffset.y >= contentSize.height - 5;
    }
    
    render(){
        if(this.state.poks.length === 0){
            this.getPoks();
            console.log('state poks primeiro: '+this.state.poks);
            return (
                <ActivityIndicator size='large' />
            );
        } else {
            {
                return (
                    <View style={pokelistStyle.listContainer}>
                        <FlatList
                            onScroll={({nativeEvent}) => {
                                if(this.isCloseToBottom(nativeEvent)){
                                    this.morePokes();
                                    console.log('state poks: '+this.state.poks);
                                }
                            }} 
                            data={this.state.poks}
                            numColumns={2}
                            renderItem={({item}) => (
                                <Pokecard dados={item} navigation={this.props.navigator}/>
                            )}
                        />
                    </View>
                );
            }
        }
    }
}

export default Pokelist;


