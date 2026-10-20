
const packagesData = {
    maldives: {
        name: "Maldives Luxury Escape",
        location: "Maldives",
        nights: "5 Nights",
        price: "₹74,999",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200",
        hotel: "Luxury beach or overwater resort",
        stay: "5 nights accommodation",
        transport: "Airport speedboat transfer",
        car: "Private transfers where available",
        bus: "Not normally applicable for island transfers",
        sightseeing: [
            "Island excursion",
            "Sunset cruise",
            "Snorkeling experience",
            "Beach activities"
        ],
        includes: [
            "Resort accommodation",
            "Breakfast",
            "Airport transfer",
            "Trip assistance"
        ]
    },

    bali: {
        name: "Bali Tropical Adventure",
        location: "Indonesia",
        nights: "6 Nights",
        price: "₹58,999",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200",
        hotel: "Private villa or resort",
        stay: "6 nights accommodation",
        transport: "Airport pickup and drop",
        car: "Private rental car with driver",
        bus: "Minibus for group sightseeing",
        sightseeing: [
            "Ubud",
            "Uluwatu Temple",
            "Bali waterfalls",
            "Tanah Lot Temple"
        ],
        includes: [
            "Villa or resort stay",
            "Breakfast",
            "Airport transfer",
            "Selected sightseeing transport"
        ]
    },

    europe: {
        name: "European Grand Tour",
        location: "Europe",
        nights: "9 Nights",
        price: "₹1,39,999",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200",
        hotel: "Premium hotels",
        stay: "9 nights accommodation",
        transport: "Airport and intercity transfers",
        car: "Optional private rental car",
        bus: "Sightseeing coach or tour bus",
        sightseeing: [
            "Paris",
            "Switzerland",
            "Venice",
            "Rome"
        ],
        includes: [
            "Hotel accommodation",
            "Selected breakfasts",
            "Intercity transport",
            "Guided sightseeing"
        ]
    },
    santorini: {
    name: "Santorini Romantic Escape",
    location: "Greece",
    nights: "5 Nights",
    price: "₹89,999",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1200",
    hotel: "Luxury hotel with Caldera views",
    stay: "5 nights accommodation",
    transport: "Airport pickup and drop",
    car: "Optional private car with driver",
    bus: "Optional guided sightseeing minibus",
    sightseeing: [
        "Oia Sunset Viewpoint",
        "Fira Town",
        "Red Beach",
        "Akrotiri",
        "Santorini Caldera"
    ],
    includes: [
        "Luxury hotel accommodation",
        "Daily breakfast",
        "Airport transfers",
        "Selected island sightseeing"
    ]
},

phuket: {
    name: "Phuket Couple Getaway",
    location: "Thailand",
    nights: "6 Nights",
    price: "₹64,999",
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=1200",
    hotel: "Beach resort or luxury hotel",
    stay: "6 nights accommodation",
    transport: "Airport transfers",
    car: "Optional private rental car with driver",
    bus: "Group minibus for sightseeing",
    sightseeing: [
        "Patong Beach",
        "Big Buddha",
        "Phi Phi Islands",
        "Phuket Old Town",
        "Promthep Cape"
    ],
    includes: [
        "Beach resort accommodation",
        "Daily breakfast",
        "Airport pickup and drop",
        "Selected sightseeing transport"
    ]
},

swiss: {
    name: "Swiss Honeymoon Experience",
    location: "Switzerland",
    nights: "7 Nights",
    price: "₹1,24,999",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200",
    hotel: "Premium Alpine hotel",
    stay: "7 nights accommodation",
    transport: "Airport and selected rail transfers",
    car: "Optional private rental car",
    bus: "Optional sightseeing coach",
    sightseeing: [
        "Interlaken",
        "Lucerne",
        "Mount Titlis",
        "Lake Geneva",
        "Grindelwald"
    ],
    includes: [
        "Premium hotel accommodation",
        "Selected breakfasts",
        "Airport transfers",
        "Selected scenic sightseeing"
    ]
},

    singapore: {
        name: "Singapore Family Holiday",
        location: "Singapore",
        nights: "5 Nights",
        price: "₹79,999",
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200",
        hotel: "Family-friendly hotel",
        stay: "5 nights accommodation",
        transport: "Airport pickup and drop",
        car: "Optional private car with driver",
        bus: "Optional family sightseeing coach",
        sightseeing: [
            "Universal Studios Singapore",
            "Gardens by the Bay",
            "Sentosa Island",
            "Merlion Park",
            "Singapore Zoo"
        ],
        includes: [
            "Family hotel accommodation",
            "Daily breakfast",
            "Airport transfers",
            "Trip assistance"
        ]
    },

    dubai: {
        name: "Dubai Family Adventure",
        location: "Dubai",
        nights: "6 Nights",
        price: "₹84,999",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200",
        hotel: "Premium family hotel",
        stay: "6 nights accommodation",
        transport: "Airport pickup and drop",
        car: "Optional private SUV with driver",
        bus: "Optional sightseeing tour bus",
        sightseeing: [
            "Burj Khalifa",
            "Dubai Mall",
            "Desert Safari",
            "Dubai Marina",
            "Museum of the Future"
        ],
        includes: [
            "Premium hotel accommodation",
            "Daily breakfast",
            "Airport transfers",
            "Travel assistance"
        ]
    },

    kerala: {
        name: "Kerala Family Escape",
        location: "Kerala",
        nights: "5 Nights",
        price: "₹39,999",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200",
        hotel: "Family resort or backwater stay",
        stay: "5 nights accommodation",
        transport: "Pickup and drop at agreed location",
        car: "Optional private AC rental car",
        bus: "Optional minibus for family groups",
        sightseeing: [
            "Alleppey Backwaters",
            "Munnar Tea Gardens",
            "Thekkady",
            "Kochi",
            "Athirappilly Waterfalls"
        ],
        includes: [
            "Family resort accommodation",
            "Daily breakfast",
            "Selected local transfers",
            "Travel assistance"
        ]
    }

};

const params = new URLSearchParams(window.location.search);
const packageId = params.get("package");
const selectedPackage = packagesData[packageId];

const container = document.getElementById("packageDetails");

if (!selectedPackage) {
    container.innerHTML = `
        <h1>Package not found</h1>
        <p>Please select a package from our Tour Packages page.</p>
    `;
} else {

    const createList = items =>
        items.map(item => `<li>${item}</li>`).join("");

    container.innerHTML = `
        <div class="detail-hero">
            <img src="${selectedPackage.image}"
                 alt="${selectedPackage.name}">

            <div class="detail-intro">
                <span>${selectedPackage.location}</span>
                <h1>${selectedPackage.name}</h1>
                <p>${selectedPackage.nights}</p>
                <h2>Starting From ${selectedPackage.price}</h2>
            </div>
        </div>

        <div class="detail-grid">

            <div class="detail-card detail-hotel">
                <h2><span class="detail-icon">🏨</span> Hotel & Stay</h2>
                <p>${selectedPackage.hotel}</p>
                <p>${selectedPackage.stay}</p>
            </div>

            <div class="detail-card detail-car">
                <h2><span class="detail-icon">🚗</span> Rental Cars</h2>
                <p>${selectedPackage.car}</p>
            </div>

            <div class="detail-card detail-bus">
                <h2><span class="detail-icon">🚌 </span>Bus & Transport</h2>
                <p>${selectedPackage.bus}</p>
                <p>${selectedPackage.transport}</p>
            </div>

            <div class="detail-card detail-sightseeing">
                <h2><span class="detail-icon">📍</span> Sightseeing Places</h2>
                <ul>
                    ${createList(selectedPackage.sightseeing)}
                </ul>
            </div>

            <div class="detail-card detail-inclusions">
                <h2><span class="detail-icon">✅ </span>Package Inclusions</h2>
                <ul>
                    ${createList(selectedPackage.includes)}
                </ul>
            </div>

            <div class="detail-card detail-charges">
                <h2><span class="detail-icon">💰 Package Charges</span></h2>
                <p>Starting price: ${selectedPackage.price}</p>
                <p>Final cost depends on travel dates,
                   number of guests and selected services.</p>
            </div>

        </div>

        <p class="detail-disclaimer">
            Sample package information. Hotel names, availability,
            transport inclusions and final prices must be confirmed
            before booking.
        </p>

        <div class="detail-action">
            <a href="contact.html?destination=${encodeURIComponent(selectedPackage.location)}"
               class="detail-book-btn">
                Proceed to Booking →
            </a>
        </div>
    `;
}

