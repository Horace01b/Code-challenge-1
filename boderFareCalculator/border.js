function calculateBodaFare(){
    const input = prompt('Unafika wapi Mkubwa? Kilometer ngapi?');
    const distanceInKm = parseInt(input);


if (isNaN(distanceInKm || distanceInKm <= 0)) {
    alert("Please enter a number greater than 0");
    return calculateBodaFare();
}

const baseFare = 50;
const chargePerKm = 15;
const fareDistance = distanceInKm * chargePerKm;
const totalFare = baseFare + fareDistance;

console.log(` For a ${distanceInKm} km Boda Boda ride:`);
console.log(`- Base Fare KES ${baseFare}`);
console.log(`- Distance Fare: KES ${fareDistance} (KES 15 * ${distanceInKm} km)`);
console.log(` => Total Estimated Fare: KES ${totalFare}`);

alert(`Boda Boda Fare Summary\n
    distance: ${distanceInKm} km\n
    baseFare: KES ${baseFare}\n
    fareDistance: KES ${fareDistance} (${chargePerKm} * ${distanceInKm})\n
    totalFare: KES ${totalFare}`);

}

calculateBodaFare();