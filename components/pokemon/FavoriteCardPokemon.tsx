import { FC } from "react";
import { useRouter } from "next/router";
import { GridItem } from "@chakra-ui/react";
import { Card, Image } from "@nextui-org/react";

interface Props {
  pokemonId: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {
  const router = useRouter();
  const onFavoriteClicked = () => {
    router.push(`/pokemon/${pokemonId}`);
  };
  return (
    <GridItem
      key={pokemonId}
      onClick={onFavoriteClicked}
      style={{ cursor: "pointer" }}
    >
      <Card isHoverable style={{ padding: 5, alignItems: "center" }}>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          className="image"
        />
      </Card>
    </GridItem>
  );
};
