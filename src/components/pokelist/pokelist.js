import React from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import Pokecard from "../pokecard/pokecard";
import pokelistStyle from "./style";
import {api, initalPoksUrl} from '../../services/api'

class Pokelist extends React.Component{

    state = {
        poks: [],
    }

    async getPoks(){
        const response = await api.get(initalPoksUrl);
        this.setState({
            poks: response.data.results
        });
    }

    componentDidMount(){
        this.getPoks();
    }
    
    render(){
        if(this.state.poks.length === 0){
            this.getPoks();
            return (
                <ActivityIndicator size='large' />
            );
        } else {
            return (
                <View style={pokelistStyle.listContainer}>
                    <FlatList 
                        data={this.state.poks}
                        numColumns={2}
                        renderItem={({item}) => (
                            <Pokecard dados={item}/>
                        )}
                    />
                </View>
            );
        }
        console.log(this.state.poks);
        
    }
}

export default Pokelist;


