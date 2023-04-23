import Head from "next/head"

import { FC,PropsWithChildren } from "react"
import { Navbar } from "../ui"


interface Props{
    title?: string
}
const origin = (typeof window === undefined ) ? '' : window.location.origin

export const Layout:FC<PropsWithChildren<Props>> = ({children, title }) => {
    
  return (
    <>
        <Head>
            <title>{title || 'PokeApp'}</title>
            <meta name="author" content="Harold Tenorio"/>
            <meta name="description" content="Informacion sobre el pokemon XXXX"/>
            <meta name="keywords" content="XXXX. ,pokemon, pokedex"/>
            
            <meta property="og:title" content={`Informacion sobre ${title}`}/>
            <meta property="og:description" content={`Esta es la pagina sobre ${title}`}/>
            <meta property="og:image" content={`${origin}ç/img/banner.png`} />
        </Head>
        <Navbar />
        <main style={{
            padding:'10px',
            height: '100%'
        }}>
            {children}
        </main>
    </>
  )
}

