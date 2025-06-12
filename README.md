// Challenge 1: Chai Bora Ingredient Calculator ☕


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
  const sugarPerCup = 2;     // in teaspoons

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

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Challenge 2: Boda Boda Ride Fare Estimator 🛵


function calculateBodaFare() {
const input = prompt('Unafika wapi Mkubwa? Kilometer ngapi?');
const distanceinkilometers = parseInt(input);
if(isNaN(distanceInkilometers) || distanceInkilometers <=0) {
    alert ("Please enter a valid number greater than 0");
    
}

const baseFare = 50; 
const chargePerKm = 15;
const fareDistance = distanceInKm * chargePerKm;
const totalFare = baseFare + fareDistance;

console.log(`For a ${distnceInKm} km Boda Boda ride:`);
console.log('- Base Fare: KES ${baseFare');
console.log('- Distance Fare: KES ${fareDistance} (KES 15 * ${distanceInKm} km)');
console.log('=> Total Estimated Fare: KES ${totalFare}');


}
calculateBodaFare()

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Challenge 3: Simplified Mobile Money Transaction Fee Estimator 📱



function estimateTransactionFee (){

      const amountStr= window.prompt("Unatuma Ngapi? (KES):");
      const amount=parseInt(amountStr);
      console.log (typeof amountStr);
      console.log(amountStr);

      if(!amount){

         console.log("failed  to convert");
         console.log(amountStr);


         return;
      }
        
      let  transactionCost=(amount * 1.5)/100;
      if (transactionCost <=10){

         alert(` Sending KES ${amount}
                Transaction cost KES 10
                Total amount=${amount + 10}
            `);
            return;
      }
      if( transactionCost >= 70){
         alert(` Sending KES ${amount}
                Transaction cost KES 70
                Total amount=${amount + 70}
            `);
            return;

      }
        alert(` Sending KES ${amount}
                Transaction cost KES 70
                Total amount=${amount + transactionCost}
            `);


    }



