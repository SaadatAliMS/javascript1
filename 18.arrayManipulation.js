let favPlace=["Turkey","Switzerland","Canada","Alaska","Russia"];
console.log(favPlace);
// array in reverse alphabetical order without changing the order of the original list
let sortedfav=[...favPlace].sort(); // sort() method with spread operator dont  change the original array
console.log(sortedfav);
console.log(favPlace); // original is not changed
let reversedfav=favPlace.slice().reverse();// reversing the order of array
console.log(reversedfav); 
let tooriginal=reversedfav.slice().reverse();
console.log(tooriginal);// back to original