import { Layout } from '../../components/layouts'
import { NoFavorites } from '../../components/ui'
import { useState, useEffect } from 'react';
import {favorites} from '../../utils/';
import { FavoritePokemons } from '../../components/pokemon';

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])
  useEffect(() => { 
    setFavoritePokemons(favorites.returnFavorite())
  }, [])
  
  return (
    <Layout title='Pokémons - Favoritos'>
      {
        favoritePokemons.length === 0 ?
        (<NoFavorites/>):
        (
          <FavoritePokemons listId={favoritePokemons}/>
        )
      }
    </Layout>
  )
}

export default FavoritesPage