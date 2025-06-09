function calculateChaiIngredients(numberOfCups) {
const input = prompt("Karibu how many cups of chai would you like to make?");
numberOfCups = parseInt(input);

if (isNaN(numberOfCups) || numberOfCups <=0) {
  alert("Invalid!please enter a number greater than zero");
  return;
}
  // Ingredient amounts per cup
  const waterPerCup = 200; // in ml
  const milkPerCup = 50;   // in ml
  const teaLeavesPerCup = 1; // in tablespoons
  const sugarPerCup = 2;     // in teaspoonsp

 const totalWater = waterPerCup * numberOfCups;
  const totalMilk = milkPerCup * numberOfCups;
  const totalTeaLeaves = teaLeavesPerCup * numberOfCups;
  const totalSugar = sugarPerCup * numberOfCups;


  var display=
  `
  
          To make ${numberOfCups} cup(s) of Kenyan chai, you need 
          Water: ${totalWater} ml
          Milk: ${totalMilk} ml
          Tea Leaves (Majani): ${totalTeaLeaves} tablespoons${totalTeaLeaves>1 ? "s":""}
          Sugar (Sukari): ${totalSugar} teaspoons${totalSugar>1 ? "s":""} 
  
  `      
  console.log(display);
  


}
calculateChaiIngredients();