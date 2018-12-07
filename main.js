"use strict";

function renderCoffee(coffee) {
    var html = '<div class="col-md-6">';
    html += '<h2 class="coffee-name">' + coffee.name + '</h2>';
    html += '<span>' + coffee.roast + '</span>';
    html+= '</div class="col">';
    return html;
}

//***completed
//add functionality for text input to update immediately
function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

//fix this function to have coffees in ascending order
var submitButton = document.querySelector('#submit');
var userSearch = document.querySelector('#user-search');
var roastSelection = document.querySelector('#roast-selection');
var newRoast = document.querySelector('#new-roast');
var newName = document.querySelector('#new-name');
var tbody = document.querySelector('#coffees');

function findRoast(e) {
    e.preventDefault();
    var dropDown = roastSelection.value;
    var roasts = [];

    coffees.forEach(function(coffee){
        if (coffee.roast === dropDown){
            roasts.push(coffee);
        } else {
            console.log('no roast type');
        }

        tbody.innerHTML = renderCoffees(roasts);
    });
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = userSearch.value;
    var filteredCoffees = [];
    selectedRoast = selectedRoast.toLowerCase();

    coffees.forEach(function(coffee){
        //noticed that adding this code will cause the displayed text to be lowercase as well
        // coffee.roast = coffee.roast.toLowerCase();
        // coffee.name = coffee.name.toLowerCase();

        if ((coffee.roast.toLowerCase()).includes(selectedRoast)){
            filteredCoffees.push(coffee);
        } else if ((coffee.name.toLowerCase()).includes(selectedRoast)){
            filteredCoffees.push(coffee);
        } else {
            console.log('none');
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);

}

function addCoffees(e) {
    e.preventDefault();
    var name = (newName.value).toString();
    var roast = (newRoast.value).toString();
    var id = coffees.length + 1;

    var newCoffee = coffees.push({
        id: id,
        name: name,
        roast: roast
    });

    tbody.innerHTML = renderCoffees(coffees);
    console.log(coffees);
}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

tbody.innerHTML = renderCoffees(coffees);

roastSelection.addEventListener('change', findRoast);
userSearch.addEventListener('keyup', updateCoffees);
submitButton.addEventListener('click', addCoffees);
