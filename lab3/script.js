class Ship {
  constructor(name, tonnage, passengers) {
    this.name = name;
    this.tonnage = tonnage;
    this.passengers = passengers;
  }
}

const main = document.getElementById('main');
const addShipBtn = document.getElementById('add-ship');
const sortBtn = document.getElementById('sort');
const shipNameInput = document.getElementById('ship-name');
const shipTonnageInput = document.getElementById('ship-tonnage');
const shipPassengersInput = document.getElementById('ship-passengers');
const searchInput = document.getElementById('search');
const calculateTotalPassengersBtn = document.getElementById('calculate-total-passengers');

let data = [
  new Ship('Flower', 12, 180),
  new Ship('Sun', 10, 156),
  new Ship('Bird', 23, 275),
  new Ship('Bird1', 20, 240),
  new Ship('Bird2', 47, 310)
  
];

function updateDOM(providedData = data) {
  main.innerHTML = '<h2>Ship List</h2>';

  providedData.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('ship');
    element.innerHTML = `<strong>${item.name}</strong>' - Tonnage: ${item.tonnage}, Passengers: ${item.passengers}`;
    main.appendChild(element);
  });
}

function sortByTonnage(dataToSort) {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredData = data.filter(ship => ship.name.toLowerCase().includes(searchTerm));
  filteredData.sort((a, b) => a.tonnage - b.tonnage);
  updateDOM(filteredData);
}

function addShip() {
  const name = shipNameInput.value;
  const tonnage = parseFloat(shipTonnageInput.value);
  const passengers = parseFloat(shipPassengersInput.value);

  if (!isNaN(tonage) && !isNaN(passengers) && name) {
    const newShip = new Ship(name, tonnage, passengers);
    data.push(newShip);
    updateDOM();
    
    shipNameInput.value = '';
    shipTonnageInput.value = '';
    shipPassengersInput.value = '';
  } else {
    alert('Invalid input. Please provide valid ship name, tonnage and passengers.');
  }
}

function searchShip() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredShips = data.filter(ship =>
    ship.name.toLowerCase().includes(searchTerm)
  );
  updateDOM(filteredShips);
}

function calculateTotalPassengers() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredShips = data.filter(ship => ship.name.toLowerCase().includes(searchTerm));
  const totalPassengers = filteredShips.reduce((sum, ship) => sum + ship.passengers, 0);
  alert(`Total Passengers: ${totalPassengers}`);
}

addShipBtn.addEventListener('click', addShip);
sortBtn.addEventListener('click', sortByTonnage);
searchInput.addEventListener('input', searchShip);
calculateTotalPassengersBtn.addEventListener('click', calculateTotalPassengers);
sortBtn.addEventListener('click', () => sortByTonnage(data));

updateDOM();