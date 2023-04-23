import { Container, Text } from "@nextui-org/react"
import Image from "next/image"
import { Layout } from "../Layouts"

export const NoFavorites = () => {
  return (
      <Container css={{display:'flex'
      ,flexDirection:'column',
      height:'calc(100vh-100px)',
      alignItems:'center',
      justifyContent:'center',
      alignSelf:'center',
      }}>
        <Text h1 color="white">No hay Favoritos </Text>
        <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
        alt='No Favorites Image'
        height={200}
        width={200}
        />
      </Container>

  )
}
