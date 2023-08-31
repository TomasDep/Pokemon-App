export interface IPokemonListResponse {
    count: number;
    next?: string;
    previous?: string;
    results: SmallPokemon[];
}

export interface SmallPokemon {
    id: number;
    name: string;
    url: string;
    image: string;
}
