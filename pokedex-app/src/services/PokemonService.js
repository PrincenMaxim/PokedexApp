import axios from "axios";

const BASE_URL = "https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon";
const DETAILS_URL = "https://pokeapi.co/api/v2/pokemon/";
const SPECIES_URL = "https://pokeapi.co/api/v2/pokemon-species/";
export const fetchPokemon = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchPokemonDetails = async (id) => {
  try {
    const response = await axios.get(DETAILS_URL + id);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchPokemonSpecies = async (id) => {
  try {
    const response = await axios.get(SPECIES_URL + id);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchPokemonEvolutionChain = async (chainURL) => {
  try {
    const response = await axios.get(chainURL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};