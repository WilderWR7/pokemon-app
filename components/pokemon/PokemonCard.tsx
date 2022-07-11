import { Card, Grid, Row, Text } from "@nextui-org/react"
import { SmallPokemon } from '../../interface/';
import { NextPage } from 'next';
import { useRouter } from "next/router";

interface Props {
    poke: SmallPokemon
}

export const PokemonCard:NextPage<Props> = ({poke}) => {
  const {push}= useRouter()
  const onClick =()=> {
    push(`/name/${poke.name}`)
  }
  return (
      <Grid xs={6} sm={3} md={2} xl={1} onClick={onClick} >
      <Card isHoverable >
        <Card.Body css={{p:1}} >
          <Card.Image
          src={poke.img}
          width='100%'
          height={140}
          />
        </Card.Body>
        <Card.Footer>
          <Row justify='space-between'>
            <Text transform='capitalize'>{poke.name}</Text>
            <Text>#{poke.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}
