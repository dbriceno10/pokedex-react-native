import axios, { AxiosResponse } from "axios";

import { PokemonsResponseApi, PokemonApi } from "../models/pokemonApi.ts";
import { Pokemon } from "../models/pokemon.ts";
import { API_HOST } from "../utils/constants.ts";
import { getPokemonData } from "../utils/helpers.ts";

export const getPokemonsApi = async (
  limit: string | number | null = 20,
  offset: string | number | null = 0
): Promise<Pokemon[]> => {
  try {
    const url = `${API_HOST}/pokemon?limit=${limit}&offset=${offset}`;
    const response: AxiosResponse<PokemonsResponseApi> = await axios(url);
    const data: AxiosResponse<PokemonApi>[] = await Promise.all(
      response.data.results?.map((e) => axios.get(e.url))
    );
    const pokemonsApi: PokemonApi[] = [];
    data?.forEach((e) => pokemonsApi.push(e.data));

    const pokemons = pokemonsApi?.map((e) => getPokemonData(e));

    return pokemons;
  } catch (error) {
    throw error;
  }
};
