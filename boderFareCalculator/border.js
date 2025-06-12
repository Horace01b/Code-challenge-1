function calculateBodaFare() {
const input = prompt('Unafika wapi Mkubwa? Kilometer ngapi?');
const distanceinkilometers = parseInt(input);
if(isNaN(distanceinkilometers) || distanceinkilometers <=0) {
    alert("Please enter a valid number greater than 0");
    return calculateBodaFare() 
}

const baseFare = 50; 
const chargePerKm = 15;
const fareDistance = distanceInKm * chargePerKm
const totalFare = baseFare + fareDistance;

console.log(`For a ${distanceInKm} km Boda Boda ride:`);
console.log('- Base Fare: KES ${baseFare');
console.log('- Distance Fare: KES ${fareDistance} (KES 15 * ${distanceInKm} km)');
console.log('=> Total Estimated Fare: KES ${totalFare}');


}
calculateBodaFare()