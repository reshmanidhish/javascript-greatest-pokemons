// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(pokemons){
    return pokemons.filter(pokemon=>pokemon.type.includes("Fire"))
}
// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(pokemons){
    if (pokemons.length===0){
        return 0
    }
    pokemons.sort((p1, p2) => {
        return parseFloat(p1.height) - parseFloat(p2.height)
    })
    return pokemons[0].name
}
// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function candyAverage(){
   let sum= pokemons.reduce(function(accumulator,current){
        return accumulator+pokemons["candy_count"]
    })
    return sum/pokemons.length
}
// Iteration 4: images for the first 10 `Ground`  Pokemons

// Iteration 5: Find all pokemon names heavier than Pikachu

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 
