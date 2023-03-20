// Write your solution here!

const cats=["Milo", "Otis", "Garfield"];

function  destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

//appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(name){
  let newCats=[... cats];
  newCats.push(name);
  return newCats;
}

//prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name){
    let newCats=[... cats];
    newCats.unshift(name);
    return newCats;
}

//removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat(){
    let newCats=[... cats];
    newCats.pop();
    return newCats;
}

//removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat(){
    let newCats=[... cats];
    newCats.shift();
    return newCats;
}