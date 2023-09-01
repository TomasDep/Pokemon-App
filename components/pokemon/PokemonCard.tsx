import { Button, Card, CardFooter, Image } from "@nextui-org/react";
import { FC } from "react";
import { useRouter } from "next/router";
import { SmallPokemon } from "@/interfaces";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/pokemon/${pokemon.id}`);
  };

  return (
    <div className="" key={pokemon.id}>
      <Card isHoverable isFooterBlurred radius="lg" className="border-none">
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
            onClick={onClick}
          >
            {pokemon.name}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
