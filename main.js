"use strict";

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
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

//fix this function to have coffees in ascending order
let submitButton = document.querySelector('#submit');
let userSearch = document.querySelector('#user-search');
let roastSelection = document.querySelector('#roast-selection');
let newRoast = document.querySelector('#new-roast');
let newName = document.querySelector('#new-name');
let tbody = document.querySelector('#coffees');

function renderCoffee(coffee) {
    let html = '<div class="col-md-6">';
    html += '<h2 class="coffee-name">' + coffee.name + '</h2>';
    html += '<span>' + coffee.roast + '</span>';
    html+= '</div class="col">';
    return html;
}

//***completed
//add functionality for text input to update immediately
function renderCoffees(coffees) {
    let html = '';
    for(let i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function findRoast(e) {
    e.preventDefault();
    let dropDown = roastSelection.value;
    let roasts = [];
    coffees.forEach(function(coffee){
        if (dropDown === 'all'){
            roasts.push(coffee);
        }else if (coffee.roast === dropDown){
            roasts.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(roasts);
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = userSearch.value;
    let filteredCoffees = [];
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
    let name = (newName.value).toString();
    let roast = (newRoast.value).toString();
    let id = coffees.length + 1;

    let newCoffee = coffees.push({
        id: id,
        name: name,
        roast: roast
    });

    tbody.innerHTML = renderCoffees(coffees);
    console.log(coffees);
}

tbody.innerHTML = renderCoffees(coffees);

roastSelection.addEventListener('change', findRoast);
userSearch.addEventListener('keyup', updateCoffees);
submitButton.addEventListener('click', addCoffees);
