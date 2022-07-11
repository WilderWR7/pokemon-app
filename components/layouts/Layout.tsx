import Head from 'next/head'
import React, { FC, ReactNode } from 'react'
import { NavBar } from '../ui/index';

type Props = {
    children?: ReactNode,
    title?: string
}

const origin = (typeof window === 'undefined')? '': window.location.origin;


export const Layout:FC<Props> = ({children,title}) => {
    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name='author' content='Wilder Mayta' />
                <meta name='description' content='Información sobre el pokemon XXXXX' />
                <meta name='keywords' content='XXXXX, pokemon, pokedex' />
                <meta property="og:title" content={`Informacion sobre ${title}`} />
                <meta property="og:description" content={`Esta es la informacion sobre ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`}/>
            </Head>
            <NavBar/>
            <main
                style={{padding: '0px 20px'}}
            >
                {
                    children
                }
            </main>
        </>
    )
}
