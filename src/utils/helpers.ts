import { PokemonApi } from "../models/pokemonApi";
import { Pokemon } from "../models/pokemon";

export const getPokemonData = (pokemon: PokemonApi): Pokemon => {
  return {
    id: pokemon.id,
    name: pokemon.name,
    hp: pokemon.stats[0].base_stat,
    strength: pokemon.stats[1].base_stat,
    defense: pokemon.stats[2].base_stat,
    speed: pokemon.stats[5].base_stat,
    height: pokemon.height,
    weight: pokemon.weight,
    // img: pokemon.sprites.front_default,
    img: pokemon.sprites.other["official-artwork"].front_default,
    types: pokemon.types.map((e) => e.type.name),
  };
};
