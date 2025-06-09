function calculateBodaFare(distanceInKm) {
const input = prompt('Unafika wapi Mkubwa? Kilometer ngapi?');
 distanceinkilometers = parseInt(input);
if(isNaN(distanceinkilometers) || distanceinkilometers >0) {
    calculateBodaFare(distanceinkilometers); 
}

const baseFare = 50; 
const chargePerKm = 15;
const totalFare = baseFare + (distanceInKm * chargePerKm);

console.log('For a ${distnceInKm} km Boda Boda ride:');
console.log('- Base Fare: KES ${baseFare');
console.log('- Distance Fare: KES ${fareDistance} (KES 15 * ${distanceInKm} km)');
console.log('=> Total Estimated Fare: KES ${totalFare}');


}
calculateBodaFare()