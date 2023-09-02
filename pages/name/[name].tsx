import { useState } from "react";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { Card, CardBody, CardHeader, Image, Button } from "@nextui-org/react";
import { Container, Grid, GridItem, Text } from "@chakra-ui/react";
import confetti from "canvas-confetti";
import { Layout } from "@/components/layouts";
import { pokeApi } from "@/api";
import { IPokemon, IPokemonListResponse } from "@/interfaces";
import { getPokemonInfo, localFavorites } from "@/utils";

interface Props {
  pokemon: IPokemon;
}

export const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(
    localFavorites.existInFavorites(pokemon.id)
  );
  const onToggleFavorite = () => {
    localFavorites.toogleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);
    if (isInFavorites) return;
    confetti({
      zIndex: 999,
      particleCount: 100,
      shapes: ["star"],
      colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };
  return (
    <Layout title={pokemon.name}>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <GridItem colSpan={1}>
          <Card isHoverable style={{ padding: "30px" }}>
            <CardBody>
              <Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "/no-image.png"
                }
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem colSpan={3}>
          <Card>
            <CardHeader
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text
                style={{ fontSize: "3.5rem", textTransform: "capitalize" }}
                transform="capitalize"
              >
                {pokemon.name}
              </Text>
              <Button
                radius="full"
                className="bg-gradient-to-tr from-purple-500 to-blue-500 text-white shadow-lg"
                onClick={onToggleFavorite}
              >
                {isInFavorites ? "Favorites" : "Add favorite"}
              </Button>
            </CardHeader>
            <CardBody>
              <Text style={{ fontSize: "1.5rem" }}>Sprites:</Text>
              <Container dir="row" display="flex" gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<IPokemonListResponse>(
    "/pokemon?limit=151"
  );
  const pokemonNames: string[] = data.results.map((pokemon) => pokemon.name);
  return {
    paths: pokemonNames.map((name) => ({
      params: { name },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  return {
    props: {
      pokemon: await getPokemonInfo(name),
    },
  };
};

export default PokemonByNamePage;
