import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";

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
      <Text>Pokedex</Text>
      {pokemons?.map((e) => {
        return (
          <View key={e.id}>
            <Text>{e.name}</Text>
            <Text>{e.types?.join(", ")}</Text>
          </View>
        );
      })}
    </SafeAreaView>
  );
}
