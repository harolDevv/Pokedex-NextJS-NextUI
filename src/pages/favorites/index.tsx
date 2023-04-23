import { Container, Text } from "@nextui-org/react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Layout } from "../../../components/Layouts"
import { ListFavoritePokemons, NoFavorites } from "../../../components/ui"
import { LocalStorageFavorites } from "../../../utils"


const Favorites = () => {
  const [FavoritesPokemons, setFavoritesPokemons] = useState<number[]>([])

  useEffect(() => {
      setFavoritesPokemons(LocalStorageFavorites.pokemons())
  }, [])
  
  return (
    <Layout>
      {
        FavoritesPokemons.length === 0 
        ? (<NoFavorites />)
        :( <ListFavoritePokemons FavoritePokemons={FavoritesPokemons}/>)
      }
    </Layout>
  )
}

export default Favorites