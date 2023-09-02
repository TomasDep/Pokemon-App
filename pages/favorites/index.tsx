import { useEffect, useState } from "react";
import { Layout } from "@/components/layouts";
import { NotFavorites } from "@/components/ui";
import { localFavorites } from "@/utils";
import { FavoritePokemons } from "@/components/pokemon";

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);
  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);
  return (
    <Layout title="Pokemons - Favorites">
      {favoritePokemons.length === 0 ? (
        <NotFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
