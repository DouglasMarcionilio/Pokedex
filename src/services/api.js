import React from "react";
import axios from "axios";

const baseUrl = 'https://pokeapi.co/api/v2/';
const initalPoksUrl =  'pokemon?limit=20&offset=0';


const pokeImage = (id) => {
    return 'https://unpkg.com/pokeapi-sprites@2.0.4/sprites/pokemon/other/dream-world/'+ id+ '.svg';
}

const api = axios.create({
    baseURL: baseUrl,
});

export {api, initalPoksUrl, pokeImage};