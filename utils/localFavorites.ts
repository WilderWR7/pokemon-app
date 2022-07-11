const toogleFavorite= (id:number)=> {
    let pokemons:number[] = JSON.parse( localStorage.getItem('favorites') || '[]');
    if(pokemons.includes(id)){
        pokemons = pokemons.filter(_id=> _id !== id);
        localStorage.setItem('favorites',JSON.stringify(pokemons))
    }
    else{
        pokemons.push(id)
        localStorage.setItem('favorites',JSON.stringify(pokemons))
    }
}
const verifyFavorite=(id:number):boolean => {
    if(typeof window === 'undefined') return false;
    let pokemon:number[] = JSON.parse(localStorage.getItem('favorites')|| '[]')
    return pokemon.includes( id );
}

const returnFavorite = ()=> {
    return JSON.parse(localStorage.getItem('favorites') || '[]')
}

export default {
    toogleFavorite,
    verifyFavorite,
    returnFavorite
}