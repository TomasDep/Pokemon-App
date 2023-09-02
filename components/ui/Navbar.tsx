import { Text } from "@chakra-ui/react";
import { colors, Link, Spacer, Image } from "@nextui-org/react";
import NextLink from "next/link";

export const Navbar = () => {
  const randNumber: number = Math.floor(Math.random() * (151 - 0 + 1) + 0);
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0px 20px",
        backgroundColor: colors?.zinc[900],
      }}
    >
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randNumber}.png`}
        alt="Pokemon icon"
        height={70}
        width={70}
      />
      <NextLink href="/">
        <Link>
          <Text>P</Text>
          <Text>okémon</Text>
        </Link>
      </NextLink>
      <Spacer style={{ flex: 1 }} />
      <NextLink href="/favorites">
        <Link>
          <Text>Favorites</Text>
        </Link>
      </NextLink>
    </div>
  );
};
