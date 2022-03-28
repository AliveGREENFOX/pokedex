
var pokemon_name, pokemon_id, pokemon_Image, pokemon_back_image, pokemon_shiny_image, pokemon_shiny_back_image, pokemon_type_1, pokemon_type_2,
pokemon_height, pokemon_weight, pokemon_hp, pokemon_attack, pokemon_defense, pokemon_sp_attack, pokemon_sp_defense, pokemon_speed, pokemon_stats;

var ball_chooser, moves_chooser, moves_size;

const pkballs = ["Amor_Ball.png", "Buceo_Ball.png", "Honor_Ball.png", "Lujo_Ball.png", "Luna_Ball.png","Master_Ball.png","Ocaso_Ball.png",
              "Peso_Ball.png", "poke_ball.png", "Safari_ball.png", "Sana_Ball.png", "Super_Ball.png", "Ultra_Ball.png","Veloz_Ball.png", "Gloria_Ball.png"];    

var types_array = ["na", "na"];
var rnd_moves = [1, 2, 3, 4];


document.getElementById("pokeball_spirite").src = "../assets/" + pkballs[choose_ball()];

//Main function to search for pokemon
const fetchPokemon = () => {

const pokeNameInput = document.getElementById("pokeName_searchbox");

let pokeInput = pokeNameInput.value;

pokeInput = pokeInput.toLowerCase();

const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;

fetch(url)
.then((res) => {
  if (res.status != "200") {
    console.log(res);
    //pokeImage("../assets/error_404.png");
    errors()


  } else {
    return res.json();
  }
})
.then((data) => {
  if (data) {
    
    console.log(data);
    
    pokemon_type_1 = data.types.map(type => type.type.name);        
    moves_size = data.moves.map(move =>move.move.name);
    
    rndmoves();

    document.getElementById("pokeball_spirite").src = "../assets/" + pkballs[choose_ball()];
    //pokeImage(pokemon_Image);

    set_images(data);
    choose_types(pokemon_type_1[0], pokemon_type_1[1]);
    set_stats(data); 
  }
});
};

//When the pokeball is clicked gets a random pokemon
const fetchPokemon_random = () => {

let pokeInput = Math.floor(Math.random() * 868);

const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;

fetch(url)
.then((res) => {
  if (res.status != "200") {
    console.log(res);
    //pokeImage("../assets/error_404.png");
    errors()


  } else {
    return res.json();
  }
})
.then((data) => {
  if (data) {
    
    console.log(data);
    
    pokemon_type_1 = data.types.map(type => type.type.name);        
    moves_size = data.moves.map(move =>move.move.name);
    
    rndmoves();

    document.getElementById("pokeball_spirite").src = "../assets/" + pkballs[choose_ball()];
    //pokeImage(pokemon_Image);

    set_images(data);
    choose_types(pokemon_type_1[0], pokemon_type_1[1]);
    set_stats(data); 
  }
});
};

//sets pokemon spirites
function set_images(received_data){


let imagesize = document.getElementsByClassName("spirites_img");

for(let i = 0; i < imagesize.length; i++){
imagesize[i].style.visibility = "visible";
}

document.getElementById("pokemon_front").src = received_data.sprites.front_default;
document.getElementById("pokemon_back").src = received_data.sprites.back_default;
document.getElementById("pokemon_front_shiny").src = received_data.sprites.front_shiny;
document.getElementById("pokemon_back_shiny").src = received_data.sprites.back_shiny;
}

//Sets the pokemon data
function set_stats(received_data){

pokemon_stats = received_data.stats.map(stat => stat.base_stat);

let class_size = document.getElementsByClassName("text");

for(let i = 0; i < 15 ; i++ ){
class_size[i].style.visibility = "visible";
}

console.log(pokemon_stats[0]);
console.log(pokemon_stats[1]);
console.log(pokemon_stats[2]);
console.log(pokemon_stats[3]);
console.log(pokemon_stats[4]);
console.log(pokemon_stats[5]);

/*for(let i = 0; i < 10; i++){
    document.getElementById("pkmn_stat_" + [i + 1]).style.visibility = "visible";
}*/


document.getElementById("pkmn_stat_1").textContent = "Pokemon name: " + received_data.name;  
document.getElementById("pkmn_stat_2").innerText = "Pokemon id: " + received_data.id;  

document.getElementById("pkmn_stat_3").innerText = "Pokemon weight: " + received_data.weight/10 + "Kg";  
document.getElementById("pkmn_stat_4").innerText = "Pokemon height: " + received_data.height/10 + "M";

document.getElementById("pkmn_stat_5").innerText = "Pokemon type: " + pokemon_type_1;

document.getElementById("pkmn_stat_6").innerText = "Pokemon HP: " + pokemon_stats[0];  
document.getElementById("pkmn_stat_7").innerText = "Pokemon Attack: " + pokemon_stats[1];  
document.getElementById("pkmn_stat_8").innerText = "Pokemon Defense: " + pokemon_stats[2];  
document.getElementById("pkmn_stat_9").innerText = "Pokemon Special attack: " + pokemon_stats[3];
document.getElementById("pkmn_stat_10").innerText = "Pokemon Special defense: " + pokemon_stats[4];  
document.getElementById("pkmn_stat_11").innerText = "Pokemon Speed: " + pokemon_stats[5];
}

//function defines pkmn types and sets images
function choose_types(type_1, type_2){

if(type_1 != null){
console.log(type_1);
document.getElementById("pokemon_Type_1").style.visibility = "visible";
document.getElementById("pokemon_Type_1").src = "../assets/" + type_setter(type_1);
}

if(type_2 != null){
console.log(type_2);
document.getElementById("pokemon_Type_2").style.visibility = "visible";
document.getElementById("pokemon_Type_2").src = "../assets/" + type_setter(type_2);
}  

else{
document.getElementById("pokemon_Type_2").style.visibility = "hidden";
}
}

// Function generates random number to choose the pokeball type
function choose_ball(){

ball_chooser = Math.floor(Math.random() * pkballs.length);
//console.log(ball_chooser);
return ball_chooser;
}

//sets the pokemon type image
function type_setter(ty){
let name;

switch (ty){
case "bug":
      name = "pkmn_type_bug.png";
break;

case "dark":
      name = "pkmn_type_dark.png";
break;

case "dragon":
  name = "pkmn_type_dragon.png";
break;

case "fairy":
  name = "pkmn_type_fairy.png";
break;

case "fighting":
  name = "pkmn_type_fighting.png";
break;

case "fire":
  name = "pkmn_type_fire.png";
break;

case "flying":
  name = "pkmn_type_flying.png";
break;

case "ghost":
  name = "pkmn_type_ghost.png";
break;

case "grass":
  name = "pkmn_type_grass.png";
break;

case "ground":
  name = "pkmn_type_ground.png";
break;

case "ice":
  name = "pkmn_type_ice.png";
break;

case "normal":
  name = "pkmn_type_normal.png";
break;

case "poison":
  name = "pkmn_type_poison.png";
break;

case "psychic":
  name = "pkmn_type_psychic.png";
break;

case "rock":
  name = "pkmn_type_rock.png";
break;

case "steel":
  name = "pkmn_type_steel.png";
break;

case "water":
  name = "pkmn_type_water.png";
break;

case "electric":
  name = "pkmn_type_electric.png";
break;

}

return name;
}

//Handle errors
function errors(){

document.getElementById("pokeball_spirite").visibility = "visible"
document.getElementById("pokeball_spirite").src = "../assets/error_404.png"

let textsize = document.getElementsByClassName("text");
for(let i = 0; i < textsize.length; i++){
textsize[i].style.visibility = "hidden"
}

let imagesize = document.getElementsByClassName("spirites_img");
for(let i = 0; i < imagesize.length; i++){
imagesize[i].style.visibility = "hidden"
}

}

//Gets random moves of the pokemon
function rndmoves(){

for(var i = 0; i < 4; i++){

moves_chooser = Math.floor(Math.random() * moves_size.length);
rnd_moves[i] = moves_size[moves_chooser];
console.log("Movimiento " + i + " : " + rnd_moves[i]);

document.getElementById("move_" + [i + 1]).innerText = "Pokemon Move: " + rnd_moves[i];
}


/* document.getElementById("move_2").innerText = "Pokemon Move 2: " + pokemon_stats[5];
document.getElementById("move_3").innerText = "Pokemon Move 3: " + pokemon_stats[5];
document.getElementById("move_4").innerText = "Pokemon Move 4: " + pokemon_stats[5];*/


}

