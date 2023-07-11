import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";

import { getPokemonsApi } from "../api/pokemon";
import { Result } from "../models/pokemon";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState<Result[]>([]);

  const start = async () => {
    try {
      const result = await getPokemonsApi();
      setPokemons(result.results);
      console.log(result.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    start();
  }, []);
  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  );
}
