import { NextPage, GetStaticProps } from "next";

import { pokeApi } from "@/api";
import { IPokemonListResponse, SmallPokemon } from "@/interfaces";
import { Layout } from "@/components/layouts";
import { PokemonCard } from "@/components/pokemon";

interface Props {
  pokemons: SmallPokemon[];
}

const baseUrlImage: string =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Pokemon list">
      <div className="container grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<IPokemonListResponse>(
    "/pokemon?limit=151"
  );
  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    image: `${baseUrlImage}${i + 1}.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
