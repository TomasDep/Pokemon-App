import { NextPage, GetStaticProps } from "next";

import { pokeApi } from "@/api";
import { IPokemonListResponse, SmallPokemon } from "@/interfaces";
import { Layout } from "@/components/layouts";
import { Button, Card, CardFooter, Image } from "@nextui-org/react";

interface Props {
    pokemons: SmallPokemon[];
}

const baseUrlImage: string =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

const HomePage: NextPage<Props> = ({ pokemons }) => {
    return (
        <>
            <Layout title="Pokemon list">
                <div className="container grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
                    {pokemons.map((pokemon) => (
                        <div className="" key={pokemon.id}>
                            <Card
                                isHoverable
                                isFooterBlurred
                                radius="lg"
                                className="border-none"
                            >
                                <Image
                                    alt="Pokemon images"
                                    className="object-cover"
                                    height={140}
                                    src={pokemon.image}
                                    width="100%"
                                />
                                <CardFooter
                                    className="
                                        justify-center
                                        before:bg-white/10 
                                        border-white/20 
                                        border-1 
                                        overflow-hidden 
                                        py-1 
                                        absolute 
                                        before:rounded-xl 
                                        rounded-large 
                                        bottom-1 
                                        w-[calc(100%_-_8px)] 
                                        shadow-small 
                                        ml-1 z-10
                                    "
                                >
                                    <Button
                                        className="text-tiny text-white bg-black/20"
                                        variant="flat"
                                        color="default"
                                        radius="lg"
                                        size="sm"
                                    >
                                        {pokemon.name}
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    ))}
                </div>
            </Layout>
        </>
    );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { data } = await pokeApi.get<IPokemonListResponse>(
        "/pokemon?limit=386"
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
