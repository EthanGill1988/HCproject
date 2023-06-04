
var selectElement = document.getElementById('mySelect');

var pointMapping = {
    "HC DLR": 4,
    "HC HTE": 4,
    "HC LRE": 4,
    "HC Rosin": 4,
    "Ref DLR": 3,
    "Ref LRE": 3,
    "Ref .5gr Rosin": 3,
    "Pruf": 6,
    "Buzz Box": 3,
    "Kapricorn": 4
}

var submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function() {
    var selectedOption = selectElement.options[selectElement.selectedIndex].text;
    var pointValue = pointMapping[selectedOption];
    var quantity = document.getElementById("quantity").value;
    var quantityValue = parseInt(quantity, 10);

    if (isNaN(quantityValue) || quantityValue <= 0) {
        console.log('Invalid quantity entered');
        return;
    }
    var name = document.getElementById('name').value;

    console.log('Strain: ' + name);
    console.log('Product Type: ' + selectedOption);
    console.log('Quantity: ' + quantityValue);
    console.log('Total Points: ' + (pointValue * quantityValue));
   
});







    








