"use strict"
document.querySelectorAll("button").forEach((button) =>{
  button.addEventListener("click", btnFilterEVTListener);
});

function btnFilterEVTListener(evt){
  
  if (evt.target.dataset.filter === "all"){
    ulPointer.innerHTML = "";
    showTheseVehicles(vehicles);
  }else if (evt.target.dataset.filter === "electric"){
    ulPointer.innerHTML = "";
    showTheseVehicles(vehicles.filter(isElectric));
  } else if (evt.target.dataset.filter === "twoseater") {
    ulPointer.innerHTML = "";
    showTheseVehicles(vehicles.filter(hasMoreThanTwoSeats));
  } else if (evt.target.dataset.filter === "jonas"){
    ulPointer.innerHTML = "";
    showTheseVehicles(vehicles.filter(ownedByJonas));
  } else if (evt.target.dataset.filter === "ryebread"){
    ulPointer.innerHTML = "";
    showTheseVehicles(vehicles.filter(ryebreadWithRoom));
  }
}
const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const ulPointer = document.querySelector("ul");

function isElectric(vehicle){
  if(vehicle.isElectric === true){
    return vehicle;
  }
}

function hasMoreThanTwoSeats(vehicle) {
  if(vehicle.passengers>1){
    return vehicle;
  }
}
function ownedByJonas(vehicle){
  if(vehicle.isElectric && vehicle.ownedBy === "Jonas"){
    return vehicle;
  }
}

function ryebreadWithRoom(vehicle){
  if(vehicle.fuel === "Rugbrød" && vehicle.passengers>1){
    return vehicle;
  }
}

// const allElectricVehicles = vehicles.filter(isElectric);
// const vehiclesWithMoreSeats = vehicles.filter(hasMoreThanTwoSeats);
// const allElectricVehiclesOwnedByJonas = vehicles.filter(ownedByJonas);
// const ryebreadWithRoomForMoreThanOne = vehicles.filter(ryebreadWithRoom);


showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  ulPointer.innerHTML = "<li><strong>Type</strong></li><li><strong>Fuel</strong></li><li><strong>Passengers</strong></li><li><strong>Stops</strong></li><li><strong>OwnedBy</strong></li><li><strong>Electric</strong></li><li><strong>Tandem</strong></li>"; 
  arr.forEach((each) => {
    ulPointer.innerHTML += `<li>${each.type}</li>`;
    ulPointer.innerHTML += `<li>${each.fuel !== undefined ? each.fuel : "Ikke angivet"}</li>`;
    ulPointer.innerHTML += `<li>${each.passengers}</li>`;
    ulPointer.innerHTML += `<li>${each.stops !== undefined ? each.stops : "Ikke angivet"}</li>`;
    ulPointer.innerHTML += `<li>${each.ownedBy !== undefined ? each.ownedBy : "Ikke angivet"}</li>`;
    ulPointer.innerHTML += `<li>${each.isElectric === true ? "Ja" : "Nej"}</li>`;
    ulPointer.innerHTML += `<li>${each.isTandem === true ? "Ja" : "Nej"}</li>`;
  });
}



//     Lav nogle hardcodede filtreringer:

// en der viser alle el drevne fartøjer

// en der viser alle fartøjer med mere end 2 sæder

// alle fartøjer el-drevne fartøjer ejet af Jonas

// alle rugbrøds drevne fartøjer med plads til mere end en.

// Lav nogle if statements i showTheseVehicles funktionen så tabellen bliver smukkere: uden undefined og tomme felter og true;

// Flyt filtreringerne over på 4 knapper der viser de filtreringer der før var hardcodede + 1 knap til at vise alle (ufiltreret)

// Style tabellen 