import { pokeApi } from "@/api";
import { IPokemon } from "@/interfaces";

export const getPokemonInfo = async (nameOrId: string) => {
  const { data } = await pokeApi.get<IPokemon>(`/pokemon/${nameOrId}`);
  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };
};
