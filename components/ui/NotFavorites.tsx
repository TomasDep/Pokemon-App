import React from "react";
import { Container, Text } from "@chakra-ui/react";
import { Image } from "@nextui-org/react";

export const NotFavorites = () => {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 100px)",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <Text>Not Favorites</Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg"
        width={250}
        height={250}
        style={{
          opacity: 0.1,
        }}
      />
    </Container>
  );
};
