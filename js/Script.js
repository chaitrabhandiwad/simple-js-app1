
var pokemonrepository = [
  { name: "Bulbasaur",moves:['poisonpowder','leechseed'], height:1,rank:1},
  { name: "Jigglypuff",moves: ['sing','quiverattack'], height:1, rank:39},
  { name: "Pikachu", moves: ['electricshock','thundervolt'], height:1, rank:25},
  { name:"Bayleef", moves:['rasorleaf','quiverattack'], height:1, rank:153},
  { name:"Butterfree", moves:['confusion','whirlwind'], height:1, rank:12},
  { name:"Charmander", moves:['fireball','inferno'], height:4, rank:4},
  { name:"Squirtel", moves:['waterspray','watercyclone'], height:1, rank:6}
];
/*
var myImage = document.getElementByid('mainImage');
var imageArray =["Bulbasaur.jpg","Jigglypuff.jpg","Pikachu.png","Bayleef.jpg","Butterfree.jpg","Charmander.jpg","Squirtel.jpg"];*/

//myImage.setAttribute("src", imageArray[1]);

for(i=0;i<=pokemonrepository.length;i++)
{

  document.write('<p>' + pokemonrepository[i].name + '(height:'  + pokemonrepository[i].height +  ')</p>')
  if(pokemonrepository[i].rank === 153)
  {
    document.write( "Wow thats big!!!!!")
    
    //document.write('<p>' + pokemonrepository[i].name '</p>')
  //  document.write('<p>' + imageArray[i].src +  '</p>')
     }
}
