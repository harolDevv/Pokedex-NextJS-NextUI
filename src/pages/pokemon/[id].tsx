import { Button, Card, Container, Grid, Text } from '@nextui-org/react';
import { GetStaticProps ,GetStaticPaths, NextPage} from 'next';
import Image from 'next/image';
import React, { useState } from 'react'
import { pokeApi } from '../../../api';
import { Layout } from '../../../components/Layouts'
import { Pokemon } from '../../../interfaces';
import { getPokemonInfo, LocalStorageFavorites } from '../../../utils';
import confetti from 'canvas-confetti'

interface Props {
  pokemon: Pokemon;
}

const PokemonPage:NextPage<Props> = ({pokemon}) => {

  const [isInFavorites, setIsInFavorites] = useState(LocalStorageFavorites.PokemonExistFavorites(pokemon.id))

  const SpritesNames = ['front_default', 'back_default' ,'front_shiny' , 'back_shiny' ]

  const onToggleFavorite = () => {
    LocalStorageFavorites.toogleFavorite(pokemon.id)
    setIsInFavorites(!isInFavorites)

    if(isInFavorites) return 

        confetti({
          zIndex:9999,
          particleCount:100,
          spread:160,
          angle: -100,
          origin:{
            x:1,
            y:0
          }
        })
  
  }
  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{padding:'30px'}}>
            <Card.Body>
              <Card.Image 
              src={pokemon.sprites.other?.dream_world.front_default || 'No image Pokemon'}
              alt={pokemon.name}
              width={'100%'}
              height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{display:'flex',justifyContent:'space-between'}}>
              <Text h1 transform='capitalize'>{pokemon.name}</Text>
              <Button
              color='gradient'
              ghost={!isInFavorites}
              onClick={onToggleFavorite}
              >
                {
                  isInFavorites ? 'En Favoritos' : 'Guardar en Favoritos'
                } 
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container display='flex' direction='row' gap={0}>
                {
                  SpritesNames.map((sprite,index) => {

                    const spriteName = index + 1 == 1 ? `front_default` : 
                    index + 1 === 2 ? 'back_default' : 
                    index + 1 === 3 ? 'front_shiny' :
                    'back_shiny'
                    const spriteUrl = pokemon.sprites[spriteName];

                    return(
                      <Image 
                      key={index + 1 } 
                      src={spriteUrl}
                      alt={pokemon.name}
                      width={100}
                      height={100}
                      />
                    )
                  })
                }
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
    
  )
}


// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes


export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151 =  [...Array(151)].map((value, index) => `${index + 1}`)
  return {
    paths : pokemons151.map( id => ({
        params: {id}
    })),
    // paths: [
    //   {
    //     params: { id :  }
    //   }
    // ],
    fallback: false
  }
}

//Despues de que se ejecuta los path pasa a get Static Props

export const getStaticProps: GetStaticProps = async ({params}) => {
  const {id} = params as {id: string};
  return {
    props: {
      pokemon: await getPokemonInfo(id)
    }
  }
}

export default PokemonPage