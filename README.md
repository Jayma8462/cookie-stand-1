# cookie-stand

'use strict';
//
var totalCookiesPerHour = [];
var firstAndPikeStore = new Store('1st and Pike', 23, 65, 6.3);
var seaTacStore = new Store('SeaTac Airport', 3, 24, 1.2);
var seaCenterStore = new Store('Seattle Center', 11, 38, 3.7);
var capitolHillStore = new Store('Capitol Hill', 20, 38, 2.3);
var alkiStore = new Store('Alki', 2, 16, 4.6);
var totalTest;
var allStores = [firstAndPikeStore, seaTacStore, seaCenterStore, capitolHillStore, alkiStore];

function Store(location, minCustHour, maxCustHour, avgCustCookies) {
  var i = 0;
  this.location = location,
  this.minCustHour = minCustHour,
  this.maxCustHour = maxCustHour,
  this.avgCustCookies = avgCustCookies,
  this.hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  this.cookiesPerHour = []
  }
  //this.totalCookies = 0,
  //totalTest = Math.floor(this.avgCustCookies * ((this.maxCustHour + 1) - this.minCustHour) + this.minCustHour),
  //this.cookiesPerHour[i] = totalTest,
var test = function(store){
  for (var i = 0; i < store.hoursOpen.length; i++) {
    store.cookiesPerHour[i].push(Math.floor(store.avgCustCookies * ((store.maxCustHour + 1) - store.minCustHour) + store.minCustHour));
  }
}
/*function customerNumber(store) {
  return Math.floor(Math.random() * ((store.maxCustHour + 1) - store.minCustHour) + store.minCustHour);
}*/
function cookiesTotal(store) {
  var totalCookies = 0;
  for(var i = 0; i < store.hoursOpen.length; i++) {
    totalCookies = totalCookies + store.cookiesPerHour[i];
  }
  store.totalCookies = totalCookies;
}

/*function cookiesPerHour(store) {
  for (var i = 0; i < store.hoursOpen.length; i++) {
    store.cookiesPerHour.push(Math.floor(this.avgCustCookies * ((this.maxCustHour + 1) - this.minCustHour) + this.minCustHour));
  }
}*/

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
tableEl.appendChild(tableFootEl);

/*for (var i = 0; i < allStores.length; i++) {
  cookiesPerHour(allStores[i]);
}*/

for (var j = 0; j < allStores.length; j++) {
  allStores[j].makeRow();
}

var totalPerHour = [];
function totalArray(allStores) {

  /*for (var i = 0; i < Math.max(firstAndPikeStore.cookiesPerHour[i], seaTacStore.cookiesPerHour[i], seaCenterStore.cookiesPerHour[i], capitolHillStore.cookiesPerHour[i], alkiStore.cookiesPerHour[i]); i++) {
    totalPerHour.push((firstAndPikeStore.cookiesPerHour[i]) + (seaTacStore.cookiesPerHour[i]) + (seaCenterStore.cookiesPerHour[i]) + (capitolHillStore.cookiesPerHour[i]) + (alkiStore.cookiesPerHour[i]));
  }

    for (var i = 0; i < firstAndPikeStore.hoursOpen.length; i++){
      var testTotal = firstAndPikeStore.cookiesPerHour[i];
      testTotal += seaTacStore.cookiesPerHour[i];
      testTotal += seaCenterStore.cookiesPerHour[i];
      testTotal += capitolHillStore.cookiesPerHour[i];
      testTotal += alkiStore.cookiesPerHour[i];
      totalCookiesPerHour[i] =+ testTotal;
      console.log(totalCookiesPerHour[i]);
    }
    console.log(totalCookiesPerHour);*/
  var newFootEl = document.createElement('tr');
  //tableFootEl.appendChild(newFootEl);

  var headerOfF = document.createElement('td');
  headerOfF.textContent = 'Total';
  newFootEl.appendChild(headerOfF);

  for (i in totalPerHour) {
    var totalPerHourEl = document.createElement('td');
    totalPerHourEl.textContent = totalPerHour[i];
    newFootEl.appendChild(totalPerHourEl);
  }

  tableEl.appendChild(newFootEl);
  return totalPerHour;
}

totalArray();
