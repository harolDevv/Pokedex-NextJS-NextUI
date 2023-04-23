import { Link, Spacer, Text,} from "@nextui-org/react"
import Image from "next/image"
import NextLink from 'next/link'
import styles from './Navbar.module.css'
export const Navbar = () => {

  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'start',
        padding: '40px 20px',
        backgroundColor: '#d03056',
    }}>
        {/* <Image 
        alt="icono de la app"
        src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"}
        width={80}
        height={80}
        /> */}
        <div className={styles['Circles-container']}>
          <div className={styles['Circle-father']}></div>
          <div className={styles['Circle-child-container']}>
              <div className={styles['Circle']}></div>
              <div className={styles['Circle']}></div>
              <div className={styles['Circle']}></div>
          </div>
        </div>
        <NextLink href={'/'} passHref legacyBehavior>
          <Link  css={{marginLeft:10}}>
            <Text color="white" h1>P</Text>
            <Text color="white" h2 css={{marginLeft:0}}>okedex</Text>
          </Link>
        </NextLink>

        <Spacer css={{flex:1}}/>
        <NextLink href={'/favorites'} legacyBehavior>
          <Link>
            <Text color="white">Favoritos</Text> 
          </Link>
        </NextLink>
    </div>
  )
}
