'use strict';
//
function Store(location, minCustHour, maxCustHour, avgCustCookies) {
  this.location = location;
  this.minCustHour = minCustHour;
  this.maxCustHour = maxCustHour;
  this.avgCustCookies = avgCustCookies;
  this.cookiesPerHour = [],
  this.totalCookies = 0,
  this.hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
}

function customerNumber(store) {
  return Math.floor(Math.random() * ((store.maxCustHour + 1) - store.minCustHour) + store.minCustHour);
}
function cookiesTotal(store) {
  var totalCookies = 0;
  for(var i = 0; i < store.hoursOpen.length; i++) {
    totalCookies = totalCookies + store.cookiesPerHour[i];

  }

  store.totalCookies = totalCookies;
}

function cookiesPerHour(store) {
  for (var i = 0; i < store.hoursOpen.length; i++) {
    store.cookiesPerHour.push(Math.floor(store.avgCustCookies * customerNumber(store)));
  }
}

Store.prototype.makeRow = function () {
  //Step 1 - create the element
  var newRowEl = document.createElement('tr');

  //Step 2 - Mutate the data
  var storeLocationEl = document.createElement('td');
  storeLocationEl.textContent = this.location;
  newRowEl.appendChild(storeLocationEl);

  for (var i = 0; i < this.hoursOpen.length; i++) {
    var cookiesPerHourEl = document.createElement('td');
    cookiesPerHourEl.textContent = this.cookiesPerHour[i];
    newRowEl.appendChild(cookiesPerHourEl);

  }

  //Step 3 - append to the DOM
  tableBodyEl.appendChild(newRowEl);
  tableBodyEl.appendChild(tableFootEl);

};

var tableEl = document.getElementById('generated-table');
var tableBodyEl = document.createElement('tbody');
var tableFootEl = document.createElement('tfoot');
tableEl.appendChild(tableBodyEl);
tableBodyEl.appendChild(tableFootEl);

var firstAndPikeStore = new Store('1st and Pike', 23, 65, 6.3);
var seaTacStore = new Store('SeaTac Airport', 3, 24, 1.2);
var seaCenterStore = new Store('Seattle Center', 11, 38, 3.7);
var capitolHillStore = new Store('Capitol Hill', 20, 38, 2.3);
var alkiStore = new Store('Alki', 2, 16, 4.6);

var allStores = [firstAndPikeStore, seaTacStore, seaCenterStore, capitolHillStore, alkiStore];

for (var i = 0; i < allStores.length; i++) {
  cookiesPerHour(allStores[i]);
}

for (var j = 0; j < allStores.length; j++) {
  allStores[j].makeRow();
}

var totalPerHour = [];
function totalArray(allStores) {

  for (var i = 0; i < Math.max(firstAndPikeStore.cookiesPerHour[i], seaTacStore.cookiesPerHour[i], seaCenterStore.cookiesPerHour[i], capitolHillStore.cookiesPerHour[i], alkiStore.cookiesPerHour[i]); i++) {
    totalPerHour.push((firstAndPikeStore.cookiesPerHour[i]) + (seaTacStore.cookiesPerHour[i]) + (seaCenterStore.cookiesPerHour[i]) + (capitolHillStore.cookiesPerHour[i]) + (alkiStore.cookiesPerHour[i]));

  }

  var newFoot = document.createElement('tr');
  newFoot.textContent = '_______Total_______';
  tableFootEl.appendChild(newFoot);

  for (i in totalPerHour) {
    var totalPerHourEl = document.createElement('td');
    totalPerHourEl.textContent = totalPerHour[i];
    tableBodyEl.appendChild(totalPerHourEl);
  }

  return totalPerHour;
}

totalArray();
