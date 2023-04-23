import { FC } from "react";
import { SmallPokemon } from "../../interfaces";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import styles from './PokemonCard.module.css'

interface Props {
  pokemon: SmallPokemon;
}
export const PokemonCard: FC<Props> = ({ pokemon }) => {
  // ({pokemon: {id,name,img}})
  const router = useRouter();
  const onPokemonClick = () => {
    router.push(`/name/${pokemon.name}`);
  };
  
  return (
    <Grid xs={6} sm={3} md={3} xl={1} key={pokemon.id} className={styles['Card-container']}>
      <Card
      className={styles['Card-child']} 
      hoverable 
      clickable
      onClick={onPokemonClick}
      css={{borderRadius:'0 0 0 30px'}}
      >
        <Card.Body css={{ p: 1 }} className={styles['Card-child-body']}>
          <Card.Image src={pokemon.img} height={140} width={"100%"} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text h3 transform="capitalize">{pokemon.name}</Text>
            <Text>N.{pokemon.id}</Text>
          </Row>
        </Card.Footer>
        <Card.Footer className={styles['Card-child-Footer']}>
              {
                pokemon.types.map( ({type:{name}}, index) => {
                  return(
                  <Row 
                  key={index + 1 } 
                  className={`${styles[`Card-child-item`]} ${styles[`Card-child-${name}`]}`}
                  >
                      {name}
                  </Row>
                )})
              }
        </Card.Footer>
      </Card>
    </Grid>
  );
};
