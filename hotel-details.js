
const hotelData = {
    luxury: {
        title: "Luxury Hotels",
        description: "Explore premium hotel stays with beautiful rooms and modern facilities.",
        hotels: [
            {
                name: "Luxury City Hotel",
                location: "Dubai",
                room: "Deluxe King Room",
                checkin: "3:00 PM",
                checkout: "12:00 PM",
                price: 12000,
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900"
            },
            {
                name: "Premium Grand Hotel",
                location: "Singapore",
                room: "Executive Suite",
                checkin: "2:00 PM",
                checkout: "11:00 AM",
                price: 15500,
                image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=900"
            },
            {
                name: "Royal Palace Stay",
                location: "Jaipur",
                room: "Luxury Double Room",
                checkin: "2:00 PM",
                checkout: "12:00 PM",
                price: 9500,
                image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900"
            }
        ]
    },

    beach: {
        title: "Beach Resorts",
        description: "Discover relaxing beachfront resorts and tropical escapes.",
        hotels: [
            {
                name: "Tropical Beach Resort",
                location: "Maldives",
                room: "Ocean View Villa",
                checkin: "2:00 PM",
                checkout: "11:00 AM",
                price: 18000,
                image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900"
            },
            {
                name: "Sunset Paradise Resort",
                location: "Goa",
                room: "Beach View Room",
                checkin: "2:00 PM",
                checkout: "11:00 AM",
                price: 7500,
                image: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=900"
            },
            {
                name: "Bali Ocean Retreat",
                location: "Bali",
                room: "Private Pool Villa",
                checkin: "3:00 PM",
                checkout: "12:00 PM",
                price: 11000,
                image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900"
            }
        ]
    },

    family: {
        title: "Family Hotels",
        description: "Comfortable accommodation options for family vacations.",
        hotels: [
            {
                name: "Family Comfort Hotel",
                location: "Hyderabad",
                room: "Family Suite",
                checkin: "2:00 PM",
                checkout: "11:00 AM",
                price: 6500,
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900"
            },
            {
                name: "Green Valley Family Resort",
                location: "Kerala",
                room: "Family Cottage",
                checkin: "1:00 PM",
                checkout: "11:00 AM",
                price: 8500,
                image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900"
            },
            {
                name: "City Family Residence",
                location: "Bengaluru",
                room: "Two-Bedroom Suite",
                checkin: "2:00 PM",
                checkout: "12:00 PM",
                price: 9000,
                image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=900"
            }
        ]
    }
};

const params = new URLSearchParams(window.location.search);
const hotelType = params.get("type") || "luxury";
const selectedData = hotelData[hotelType];

const title = document.getElementById("hotelPageTitle");
const description = document.getElementById("hotelPageDescription");
const container = document.getElementById("hotelCards");

const formatPrice = amount => "₹" + amount.toLocaleString("en-IN");

if (!selectedData) {
    title.textContent = "Hotel category not found";
    description.textContent = "Please select a valid hotel category.";
} else {
    title.textContent = selectedData.title;
    description.textContent = selectedData.description;

    selectedData.hotels.forEach((hotel, index) => {

        const card = document.createElement("article");
        card.className = `wv-hotel-card wv-hotel-color-${index % 3 + 1}`;

        card.innerHTML = `
            <div class="wv-hotel-image">
                <img src="${hotel.image}"
                     alt="${hotel.name}"
                     loading="lazy">
            </div>

            <div class="wv-hotel-content">
                <span class="wv-hotel-location">📍 ${hotel.location}</span>
                <h2>${hotel.name}</h2>

                <p>🛏️ ${hotel.room}</p>

                <div class="wv-hotel-times">
                    <span>🕒 Check-in: ${hotel.checkin}</span>
                    <span>🕒 Check-out: ${hotel.checkout}</span>
                </div>

                <div class="wv-hotel-calculator">
                    <label>
                        Number of Guests
                        <select class="wv-hotel-guests">
                            ${Array.from({length: 10}, (_, i) =>
                                `<option value="${i + 1}">
                                    ${i + 1} ${i === 0 ? "Guest" : "Guests"}
                                </option>`
                            ).join("")}
                        </select>
                    </label>

                    <label>
                        Number of Nights
                        <select class="wv-hotel-nights">
                            ${Array.from({length: 14}, (_, i) =>
                                `<option value="${i + 1}">
                                    ${i + 1} ${i === 0 ? "Night" : "Nights"}
                                </option>`
                            ).join("")}
                        </select>
                    </label>

                    <p class="wv-hotel-total">
                        Estimated Total:
                        <strong>${formatPrice(hotel.price)}</strong>
                    </p>
                </div>

                <div class="wv-hotel-bottom">
                    <div>
                        <small>Sample rate per guest / night</small>
                        <h3>${formatPrice(hotel.price)}</h3>
                    </div>

                    <a href="contact.html"
                       class="wv-hotel-book">
                        Enquire Now →
                    </a>
                </div>
            </div>
        `;

        container.appendChild(card);

        const guests = card.querySelector(".wv-hotel-guests");
        const nights = card.querySelector(".wv-hotel-nights");
        const total = card.querySelector(".wv-hotel-total strong");

        function updateTotal() {
            const amount =
                hotel.price * Number(guests.value) * Number(nights.value);

            total.textContent = formatPrice(amount);
        }

        guests.addEventListener("change", updateTotal);
        nights.addEventListener("change", updateTotal);
    });
}
