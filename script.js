
var selectElement = document.getElementById('mySelect');
var today = dayjs();
$('.header').text(today.format('MMM D, YYYY'));
var dayWeek = today.format('dddd MMMM D, YYYY');
$('.header').text(dayWeek);

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

var loggedValues = [];
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
    var totalPoints = pointValue * quantityValue;
    var timeStamp = dayjs().format('dddd MMM D, YYYY, hh:mm:ss a');

    loggedValues.push({
        name: name,
        option: selectedOption,
        quantity: quantityValue,
        totalPoints: totalPoints,
        timeStamp: timeStamp,
    });

    document.getElementById('name').value = '';
    selectElement.selectedIndex = 0;
    document.getElementById('quantity').value = '';

    displayLoggedValues();
    console.log(loggedValues);
});

var completionButton = document.getElementById('completionButton');

completionButton.addEventListener('click', function() {
    var message = 'Job Completed:\n';
    

    for (var i = 0; i < loggedValues.length; i++) {
        var loggedValue = loggedValues[i];
        message +=
        'Date/Time: ' + dayjs().format('dddd MMM D, YYYY, hh:mm:ss a') +
        '\nName: ' + loggedValue.name +
        '\nProduct Type: ' + loggedValue.option +
        '\nQuantity: ' + loggedValue.quantity +
        '\nTotal Points: ' + loggedValue.totalPoints +
        '\n\n';
    }

    var confirmed = confirm(message);
    if (confirmed) {
        console.log('User confirmed the prompt');
    } else {
        console.log('User canceled the prompt')
    }
});

function displayLoggedValues() {
    var loggedValuesContainer = document.getElementById('loggedValuesContainer');
    loggedValuesContainer.innerHTML = ''; 

    var ul = document.createElement('ul');
    

    for (var i = 0; i < loggedValues.length; i++) {
        var loggedValue = loggedValues[i];
        var li = document.createElement('li');
    li.textContent =
        'Name: ' +
        loggedValue.name +
        ', Product Type: ' +
        loggedValue.option +
        ', Quantity: ' +
        loggedValue.quantity +
        ', Total Points: ' +
        loggedValue.totalPoints;

    ul.appendChild(li);
  
    }

    loggedValuesContainer.appendChild(ul);
}







    








