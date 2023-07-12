import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";

import PokemonList from "../components/PokemonList";
import { getPokemonsApi } from "../api/pokemon";
import { Pokemon } from "../models/pokemon";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const start = async () => {
    try {
      const result = await getPokemonsApi();
      setPokemons(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    start();
  }, []);
  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons}/>
    </SafeAreaView>
  );
}
