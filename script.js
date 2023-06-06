
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

    loggedValues.push({
        name: name,
        option: selectedOption,
        quantity: quantityValue,
        totalPoints: totalPoints
    });

    document.getElementById('name').value = '';
    selectElement.selectedIndex = 0;
    document.getElementById('quantity').value = '';

    console.log(loggedValues);
});

var completionButton = document.getElementById('completionButton');

completionButton.addEventListener('click', function() {
    var message = 'Job Completed:\n';
    

    for (var i = 0; i < loggedValues.length; i++) {
        var loggedValue = loggedValues[i];
        message +=
        'Date/Time: ' + dayjs().format('MMM D, YYYY, hh:mm:ss a') +
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







    








