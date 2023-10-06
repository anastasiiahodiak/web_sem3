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
  const searchInput = document.getElementById('search');
  const calculateTotalPassengersBtn = document.getElementById('calculate-total-passengers');

  const shipNameInput = document.getElementById('ship-name');
  const shipTonnageInput = document.getElementById('ship-tonnage');
  const shipPassengersInput = document.getElementById('ship-passengers');
  const saveBtn = document.getElementById('save');

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
      element.innerHTML = `<strong>${item.name}</strong> - Tonnage: ${item.tonnage}, Passengers: ${item.passengers}`;
      main.appendChild(element);
      element.innerHTML = `<strong>${item.name}</strong> - Tonnage: ${item.tonnage}, Passengers: ${item.passengers} <button onclick="editShip(${providedData.indexOf(item)})">Edit</button>`;
    });
  }
  
  function sortByTonnage() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredData = data.filter(ship => ship.name.toLowerCase().includes(searchTerm));
    filteredData.sort((a, b) => a.tonnage - b.tonnage);
    updateDOM(filteredData);
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


  function addShip() {
    const name = shipNameInput.value;
    const tonnage = parseFloat(shipTonnageInput.value);
    const passengers = parseFloat(shipPassengersInput.value);
    
  
    if (!isNaN(tonnage) && !isNaN(passengers) && name) {
      const newShip = new Ship(name, tonnage, passengers);
  
      const existingData = JSON.parse(localStorage.getItem('ships')) || [];
      existingData.push(newShip);
      localStorage.setItem('ships', JSON.stringify(existingData));
      updateDOM(existingData);

      shipNameInput.value = '';
      shipTonnageInput.value = '';
      shipPassengersInput.value = '';
      
      location.reload();
    } else {
      alert('Invalid input. Please provide valid ship name, tonnage, and passengers.');
    }
  }
  
  saveBtn.addEventListener('click', addShip);
  

const editShipNameInput = document.getElementById('edit-ship-name');
const editShipTonnageInput = document.getElementById('edit-ship-tonage');
const editShipPassengersInput = document.getElementById('edit-ship-passengers');
const saveEditedShipBtn = document.getElementById('save-edited-ship');

let editingIndex = null;

function editShip(index) {
  const ship = data[index];
  editShipNameInput.value = ship.name;
  editShipTonnageInput.value = ship.tonnage;
  editShipPassengersInput.value = ship.passengers;
  editingIndex = index;

  scrollToEditSection();
}

function scrollToEditSection() {
  const editSection = document.getElementById('edit-section'); 
  editSection.scrollIntoView({ behavior: 'smooth' });
}

function saveEditedShip() {
  if (editingIndex !== null) {
    const newName = editShipNameInput.value;
    const newTonnage = parseFloat(editShipTonnageInput.value);
    const newPassengers = parseFloat(editShipPassengersInput.value);

    if (!isNaN(newTonnage) && !isNaN(newPassengers) && newName) {
      const editedShip = new Ship(newName, newTonnage, newPassengers);
      data[editingIndex] = editedShip;

      localStorage.setItem('ships', JSON.stringify(data));
      updateDOM();
      
      editShipNameInput.value = '';
      editShipTonnageInput.value = '';
      editShipPassengersInput.value = '';
      editingIndex = null;
    } else {
      alert('Invalid input. Please provide valid ship name, tonnage, and passengers.');
    }
  } else {
    alert('No ship selected for editing.');
  }
}

saveEditedShipBtn.addEventListener('click', saveEditedShip);

  function redirectToEditPage(index) {}
  
  function loadShips() {
    const ships = JSON.parse(localStorage.getItem('ships')) || [];
    data = ships.map(ship => new Ship(ship.name, ship.tonnage, ship.passengers));
    updateDOM();
  }
  
  function init() {
    sortBtn.addEventListener('click', sortByTonnage);
    searchInput.addEventListener('input', searchShip);
  
    loadShips();
  }
  
  init();

  updateDOM();

