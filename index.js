/* Input the correct syntax */function setTripType(type) {
    document.getElementById('returnSection').style.display = (type === 'round') ? 'block' : 'none';
    document.querySelectorAll('.flight-option button').forEach(button => button.classList.remove('active'));
    document.getElementById(type).classList.add('active');
}

function updatePassengers(type, change) {
    let countElement = document.getElementById(`${type}-count`);
    let count = parseInt(countElement.textContent) || 0;
    count = Math.max(0, count + change);
    countElement.textContent = count;
    updateTravellerSummary();
}

function updateTravellerSummary() {
    let adults = document.getElementById('adults-count').textContent;
    let children = document.getElementById('children-count').textContent;
    let infants = document.getElementById('infants-count').textContent;
    document.getElementById('traveller-summary').textContent = `${adults} Adult${adults != 1 ? 's' : ''}, ${children} Children, ${infants} Infant${infants != 1 ? 's' : ''}`;
}