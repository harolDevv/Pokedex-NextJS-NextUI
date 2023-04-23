import { Card, Grid } from "@nextui-org/react"
import { FC } from "react"
import { FavoriteCardPokemon } from "./"


interface Props{
    FavoritePokemons:number[]
}

export const ListFavoritePokemons:FC<Props> = ({FavoritePokemons}) => {
  return (
    <Grid.Container gap={2} direction={'row'} justify='flex-start'>
        {
            FavoritePokemons.map( (id) => (
                <FavoriteCardPokemon 
                key={id} 
                id={id}/>
            ))
        }
    </Grid.Container>
  )
}
