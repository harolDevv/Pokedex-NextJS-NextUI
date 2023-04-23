import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

export const getPokemonInfo = async (IdorName:string) => {
    const {data:{id,name,sprites}} = await pokeApi.get<Pokemon>(`/pokemon/${IdorName}`)
    return {
        id,
        name,
        sprites
    }
}
