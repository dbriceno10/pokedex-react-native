import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { Pokemon } from "../models/pokemon";

interface PokemonListProps {
  pokemons: Pokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons }) => {
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
};

const styles = StyleSheet.create({
   flatListContentContainer: {
    paddingHorizontal: 5
   }
})

export default PokemonList;
