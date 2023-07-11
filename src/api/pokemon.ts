import axios, { AxiosResponse } from "axios";

import { PokemonResponse } from "../models/pokemon.ts";

import { API_HOST } from "../utils/constants.ts";

export async function getPokemonsApi(
  limit: string | number | null = 20,
  offset: string | number | null = 20
) {
  try {
    const url = `${API_HOST}/pokemon?limit=${limit}&offset=${offset}`;
    const response: AxiosResponse<PokemonResponse> = await axios(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}
