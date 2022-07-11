import { Grid } from '@nextui-org/react'
import React from 'react'
import { FavoriteCardPokemon } from './index'
import { NextPage } from 'next';

interface Props {
    listId: number[]
}

export const FavoritePokemons:NextPage<Props> = ({listId=[]}) => {
    return (
        <Grid.Container gap = {2} direction='row' justify='flex-start'>
            {
                listId.map(id=>(
                <FavoriteCardPokemon key={id} id={id} />
            ))
            }
        </Grid.Container>
    )
}
