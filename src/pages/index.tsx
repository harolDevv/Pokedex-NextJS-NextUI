import {Grid } from '@nextui-org/react'
import { NextPage,GetStaticProps } from 'next'
import { pokeApi } from '../../api'
import { Layout } from "../../components/Layouts"
import { PokemonCard } from '../../components/pokemon'
import { Pokemon, PokemonListResponse, SmallPokemon } from '../../interfaces'


interface Props{
  pokemons:SmallPokemon[]
}

const Home:NextPage<Props> = ({pokemons}) => {
  return (
    <>
    <Layout title="Lista de Pokemons">
      <Grid.Container gap={2} justify='flex-start'>
        {
          pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon}/>
          ))
        }
      </Grid.Container>
    </Layout>
    </>
  )
}

export default Home

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
//- getSTaticProps solo se ejecuta del lado del servidor

export const getStaticProps: GetStaticProps = async (ctx) => {
    const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  
    const pokemons =  data.results.map((item,i)=> {
    return {...item, 
      id:i + 1 , 
      img:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`,
    }
  })

  const pokemonsAndTypes = await Promise.all(pokemons.map(async (item, i) => {
    const {data} = await pokeApi.get<Pokemon>(`/pokemon/${item.name}`)
    return {
      ...item,
      types: data.types
    }
  }))
  
  return {
    props: {
      pokemons: pokemonsAndTypes
    }
  }
}

