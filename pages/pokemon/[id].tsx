import React from "react";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { Card, CardBody, CardHeader, Image, Button } from "@nextui-org/react";
import { Container, Grid, GridItem, Text } from "@chakra-ui/react";
import { Layout } from "@/components/layouts";
import { pokeApi } from "@/api";
import { IPokemon } from "@/interfaces";

interface Props {
  pokemon: IPokemon;
}

export const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout>
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
              >
                Favorite
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
  const collectionPokemons: string[] = [...Array(151)].map(
    (value, index) => `${index + 1}`
  );
  return {
    paths: collectionPokemons.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const { data } = await pokeApi.get<IPokemon>(`/pokemon/${id}`);
  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonPage;
