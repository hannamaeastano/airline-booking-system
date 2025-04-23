// Screen Management
function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.add('d-none');
    });
    

    console.log('Trying to show screen:', screenId + 'Screen');
    console.log('Found:', document.getElementById(screenId + 'Screen'));
    // Show the requested screen
    document.getElementById(screenId + 'Screen').classList.remove('d-none');
}

// Personal Info Screen
document.getElementById('bookingForm').addEventListener('input', function() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;

    const confirmButton = document.getElementById('confirmBtn');

    // Enable the Confirm button only if all fields are filled
    if (firstName && lastName && email && password && phone && dob) {
        confirmButton.disabled = false;
    } else {
        confirmButton.disabled = true;
    }
});


// Book Flight Screen
function openNav() {
        document.getElementById("mySidepanel").style.width = "250px";
    }
function closeNav() {
        document.getElementById("mySidepanel").style.width = "0";
    }
            
        document.addEventListener("DOMContentLoaded", function() {
        const flightBookingScreen = document.getElementById("flightBookingScreen");
        const hamburger = document.querySelector(".hamburger");
                
         if (flightBookingScreen) {
            hamburger.style.display = "block";
                }
            });

function toggleTripType(type) {
        const oneWayBtn = document.getElementById('oneWayBtn');
        const roundTripBtn = document.getElementById('roundTripBtn');
        const returnDate = document.querySelector('.return-date');

        if (type === 'roundTrip') {
            roundTripBtn.classList.add('active');
            oneWayBtn.classList.remove('active');
            returnDate.classList.remove('d-none');
        } else {
            oneWayBtn.classList.add('active');
            roundTripBtn.classList.remove('active');
            returnDate.classList.add('d-none');
            }
        }

        // Example list of available routes (you can expand this list)
       /* const availableFlights = [
            ["MNL", "CEB"], ["MNL", "DVO"], ["MNL", "ILO"],
            ["CEB", "DVO"], ["CEB", "ILO"], ["DVO", "BCD"],
            ["KLO", "PPS"], ["PPS", "CGY"], ["CGY", "CRK"]
        ];*/
        //   // optional will add more functionalies if the flight is really not available
        /*const isAvailable = availableFlights.some(route => 
            (route[0] === from && route[1] === to) || (route[0] === to && route[1] === from)
        );*/

        // optional will add more functionalies if the flight is really not available
       /* if (isAvailable) {
            showScreen("flightDetails");
        } else {
            alert("No direct flights available for this route.");
        } 
            */

// Flight Details Screen
function updateFlightDetailsScreen() {
    let from = sessionStorage.getItem("from") || "--";
    let to = sessionStorage.getItem("to") || "--";
    let date = sessionStorage.getItem("date") || "--";
    let price = sessionStorage.getItem("price") || "--";

    let departureTime = "10:00 AM"; // Example, can be dynamic
    let arrivalTime = "12:00 PM"; // Example, can be dynamic

    document.getElementById("fromAirport").innerText = from;
    document.getElementById("toAirport").innerText = to;
    document.getElementById("flightDate").innerText = getDepartureDate();
    document.getElementById("flightPrice").innerText = price;
    document.getElementById("departureTime").innerText = departureTime;
    document.getElementById("arrivalTime").innerText = arrivalTime;
    document.getElementById("flightTime").innerText = departureTime;
    document.getElementById("myDepartureDate").innerHTML = `<i class="fas fa-calendar-alt"></i> ${getDepartureDate()}`;
}

function checkFlightAvailability() {
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let date = document.querySelector("input[type='date']").value;
    let price = "₱3,500"; //Need to change to something dynamic~

    if (from === "Select your departure" || to === "Select your destination" || date === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (from === to) {
            alert("Departure and destination cannot be the same.");
            return false;
        }

    sessionStorage.setItem("from", from);
    sessionStorage.setItem("to", to);
    sessionStorage.setItem("date", date);
    sessionStorage.setItem("price", price);

    /*showScreen('flightDetails');
    updateFlightDetailsScreen();*/
    renderSearchResults();
}

function showFlightDetails(){
    console.log("showFlightDetails!!!")
    showScreen('flightDetails');
    updateFlightDetailsScreen();
}


function getNumberOfTravellers(){
    const selectElement = document.getElementById('numberOfTravellers');

    const selectedOption = selectElement.value;

    return parseInt(selectedOption)
}

function getDepartureDate(){
    const departureDate = document.querySelector('#departureDate').value;
    sessionStorage.setItem('departureDate', departureDate);
    console.log(departureDate);
    return departureDate;

}

// Choose Seat Screen
document.addEventListener("DOMContentLoaded", function () {
    const seatsContainer = document.querySelector(".seats-container");
    const rows = 6;
    const cols = 4;
    const occupiedSeats = ["2B", "4D", "5C", "5D"]; // Example occupied seats
    let selectedSeats = []; // Array to track selected seats

    const seatLabels = [
        ["1A", "1B", "1C", "1D"],
        ["2A", "2B", "2C", "2D"],
        ["3A", "3B", "3C", "3D"],
        ["4A", "4B", "4C", "4D"],
        ["5A", "5B", "5C", "5D"],
        ["6A", "6B", "6C", "6D"]
    ];

    // Ensure the container is a grid
    seatsContainer.style.display = "grid";
    seatsContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    seatsContainer.style.gap = "10px";
    seatsContainer.style.justifyContent = "center";
    seatsContainer.style.marginTop = "20px";

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const seat = document.createElement("div");
            seat.classList.add("seat");
            seat.textContent = seatLabels[i][j];

            if (occupiedSeats.includes(seatLabels[i][j])) {
                seat.classList.add("occupied");
            }

            seat.addEventListener("click", function () {
                // Get the number of travellers allowed
                const maxSeats = getNumberOfTravellers();

                if (!seat.classList.contains("occupied")) {
                    // Limit selection based on the number of travellers
                    if (selectedSeats.length < maxSeats || seat.classList.contains("selected")) {
                        seat.classList.toggle("selected");

                        const seatID = seat.textContent;
                        if (selectedSeats.includes(seatID)) {
                            selectedSeats = selectedSeats.filter(s => s !== seatID);
                        } else {
                            selectedSeats.push(seatID);
                        }
                    } else {
                        alert(`You can only select up to ${maxSeats} seats.`);
                    }
                }
            });

            seatsContainer.appendChild(seat);
        }
    }

    window.confirmSelection = function (event) {
        event.preventDefault(); // Prevent unintended form submission or navigation
        
        const maxSeats = getNumberOfTravellers();
        
        if (selectedSeats.length === 0) {
            alert("Please select at least one seat before proceeding.");
            return;
        }

        if (selectedSeats.length > maxSeats) {
            alert(`You can only select up to ${maxSeats} seats.`);
            return;
        }

        if (typeof showScreen === "function") {
            showScreen("payment");
        } else {
            console.error("showScreen function is not defined.");
        }
    };
});


// Payment Screen
document.getElementById('paymentForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevents form from refreshing

            const cardNumber = document.getElementById('cardNumber').value.trim();
            const cardHolder = document.getElementById('cardHolder').value.trim();
            const expiryDate = document.getElementById('expiryDate').value.trim();
            const cvv = document.getElementById('cvv').value.trim();

            if (!cardNumber || !cardHolder || !expiryDate || !cvv) {
                alert("Please fill in all the fields before proceeding.");
                return;
            }

            showScreen('boardingPass');
        });



// Boarding Pass Screen
function downloadBoardingPass() {
        alert("Downloading...");
        // Will add actual download functionality here if applicable/needed
    }

function renderSearchResults() {
    const from = sessionStorage.getItem("from");
    const to = sessionStorage.getItem("to");
    const date = sessionStorage.getItem("date");

    const resultsContainer = document.getElementById("searchResultsContainer");
    resultsContainer.innerHTML = ""; // Clear any previous results

    //this is mock data po, should be replaced~
    const sampleFlights = [
        {
            airline: "ChubbyCat Air",
            time: "10:00 AM - 12:00 PM",
            price: "₱3,500",
        },
        {
            airline: "FurFly Express",
            time: "2:00 PM - 4:00 PM",
            price: "₱20,000",
        },
    ];

    // Dynamically generate search result cards
    sampleFlights.forEach((flight) => {
        const card = document.createElement("div");
        card.className = "card p-3 mb-3 shadow-sm";

        card.innerHTML = `
            <h5>${flight.airline}</h5>
            <p>${from} → ${to} | ${flight.time} | ${date}</p>
            <p><strong>${flight.price}</strong></p>
            <button class="btn btn-primary w-100 mt-3" onclick="showFlightDetails()">Select</button>
        `;

        resultsContainer.appendChild(card);
    });
    console.log("Rendering search results for", from, to, date); //check
    // Show the search results screen
    showScreen("searchResults");
}

