
const flightData = {

    domestic: {
        title: "Domestic Flights",
        description: "Explore sample flights between popular Indian cities.",

        flights: [
            {
                airline: "IndiGo",
                from: "Hyderabad",
                to: "Delhi",
                departure: "06:30 AM",
                arrival: "08:45 AM",
                duration: "2h 15m",
                price: "₹4,999",
                image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900"
            },
            {
                airline: "Air India",
                from: "Hyderabad",
                to: "Mumbai",
                departure: "10:00 AM",
                arrival: "11:35 AM",
                duration: "1h 35m",
                price: "₹5,499",
                image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=900"
            },
            {
                airline: "Akasa Air",
                from: "Bengaluru",
                to: "Goa",
                departure: "02:15 PM",
                arrival: "03:30 PM",
                duration: "1h 15m",
                price: "₹3,999",
                image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900"
            }
        ]
    },

    international: {
        title: "International Flights",
        description: "Explore sample international flight options.",

        flights: [
            {
                airline: "Emirates",
                from: "Hyderabad",
                to: "Dubai",
                departure: "04:30 AM",
                arrival: "06:45 AM",
                duration: "3h 45m",
                price: "₹18,999",
                image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=900"
            },
            {
                airline: "Singapore Airlines",
                from: "Chennai",
                to: "Singapore",
                departure: "11:15 PM",
                arrival: "06:10 AM (+1 day)",
                duration: "4h 25m",
                price: "₹24,999",
                image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900"
            },
            {
                airline: "Qatar Airways",
                from: "Hyderabad",
                to: "Doha",
                departure: "03:20 AM",
                arrival: "05:30 AM",
                duration: "4h 40m",
                price: "₹22,999",
                image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=900"
            }
        ]
    },

    group: {
        title: "Group Flight Booking",
        description: "Sample travel options for families, friends and group tours.",

        flights: [
            {
                airline: "Group Travel - Domestic",
                from: "Hyderabad",
                to: "Goa",
                departure: "09:00 AM",
                arrival: "10:20 AM",
                duration: "1h 20m",
                price: "Custom Quote",
                image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900"
            },
            {
                airline: "Group Travel - International",
                from: "Chennai",
                to: "Singapore",
                departure: "10:30 PM",
                arrival: "05:20 AM (+1 day)",
                duration: "4h 20m",
                price: "Custom Quote",
                image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=900"
            },
            {
                airline: "Family Holiday Group",
                from: "Bengaluru",
                to: "Delhi",
                departure: "07:00 AM",
                arrival: "09:40 AM",
                duration: "2h 40m",
                price: "Custom Quote",
                image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900"
            }
        ]
    }
};

const params = new URLSearchParams(window.location.search);

const flightType = params.get("type") || "domestic";

const selectedData = flightData[flightType];

const title = document.getElementById("flightPageTitle");
const description = document.getElementById("flightPageDescription");
const container = document.getElementById("flightCards");

if (!selectedData) {
    title.textContent = "Flight category not found";
    description.textContent = "Please select a valid flight category.";
} else {
    title.textContent = selectedData.title;
    description.textContent = selectedData.description;

    selectedData.flights.forEach((flight, index) => {

        const card = document.createElement("article");
        card.className = `wv-flight-card wv-flight-color-${index % 3 + 1}`;

        card.innerHTML = `
            <div class="wv-flight-image">
                <img src="${flight.image}"
                     alt="Airplane representing ${flight.airline}">
            </div>

            <div class="wv-flight-content">

                <h2>✈ ${flight.airline}</h2>

                <div class="wv-flight-route">
                    <div>
                        <span>FROM</span>
                        <strong>${flight.from}</strong>
                        <p>${flight.departure}</p>
                    </div>

                    <div class="wv-flight-arrow">✈</div>

                    <div>
                        <span>TO</span>
                        <strong>${flight.to}</strong>
                        <p>${flight.arrival}</p>
                    </div>
                </div>

                <p class="wv-flight-duration">
                    🕒 Duration: ${flight.duration}
                </p>
                 <div class="flight-passenger-box">
                   <label for="passengers-${index}">
                        Number of Passengers
                   </label>

                   <select id="passengers-${index}"
                   class="flight-passengers">
                   <option value="1">1 Person</option>
                   <option value="2">2 Persons</option>
                   <option value="3">3 Persons</option>
                   <option value="4">4 Persons</option>
                   <option value="5">5 Persons</option>
                   <option value="6">6 Persons</option>
                   <option value="7">7 Persons</option>
                   <option value="8">8 Persons</option>
                   <option value="9">9 Persons</option>
                   <option value="10">10 Persons</option>
                   </select>

                   <p class="flight-total">
                    Total: <strong class="flight-total-amount">
                     ${flight.price}
                     </strong>
                  </p>
             </div>
                <div class="wv-flight-bottom">
                    <div>
                        <small>Sample Fare</small>
                        <h3>${flight.price}</h3>
                    </div>

                    <a class="wv-flight-book"
                       href="contact.html">
                        Enquire Now →
                    </a>
                </div>
            </div>
        `;

        container.appendChild(card);
         // SELECT PASSENGERS
        const passengerSelect =
            card.querySelector(".flight-passengers");

        // DISPLAY TOTAL AMOUNT
        const totalAmount =
            card.querySelector(".flight-total-amount");

        // GET PRICE PER PERSON
        const fare = Number(
            flight.price.replace(/[₹,]/g, "")
        );

        // CALCULATE TOTAL CHARGES
        if (Number.isFinite(fare) && flight.price !== "Custom Quote") {

            passengerSelect.addEventListener("change", () => {

                const persons = Number(passengerSelect.value);

                const total = fare * persons;

                totalAmount.textContent =
                    "₹" + total.toLocaleString("en-IN");

            });

        } else {

            totalAmount.textContent = "Request a Quote";

        }
    });
}
