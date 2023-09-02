import { FC } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { FavoriteCardPokemon } from "./";

interface Props {
  pokemons: number[];
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      gap={10}
      justifyContent="flex-end"
      alignItems="center"
    >
      {pokemons.map((id) => (
        <FavoriteCardPokemon key={id} pokemonId={id} />
      ))}
    </Grid>
  );
};
