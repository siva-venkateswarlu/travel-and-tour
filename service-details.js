
const servicesData = {
    flight: {
        title: "Flight Booking",
        icon: "✈️",
        subtitle: "Domestic and international flight assistance",
        description: "We help travelers explore flight options, compare routes and plan convenient journeys.",
        options: [
            "Domestic flight planning",
            "International flight planning",
            "One-way and round-trip options",
            "Economy and business class options"
        ],
        support: [
            "Route and schedule guidance",
            "Baggage policy information",
            "Travel document reminders",
            "Booking enquiry assistance"
        ],
        charges: "Flight fares and any service fees depend on the airline, route, dates and availability."
    },

    hotel: {
        title: "Hotel Booking",
        icon: "🏨",
        subtitle: "Comfortable stays for every journey",
        description: "Explore accommodation options for family holidays, couples, business trips and group travel.",
        options: [
            "Budget hotels",
            "Luxury resorts",
            "Private villas",
            "Family-friendly accommodation"
        ],
        support: [
            "Hotel selection assistance",
            "Room category guidance",
            "Check-in and check-out information",
            "Special request coordination"
        ],
        charges: "Hotel rates depend on destination, room category, season and availability."
    },

    holiday: {
        title: "Holiday Packages",
        icon: "🌴",
        subtitle: "Customized domestic and international holidays",
        description: "Discover travel packages with accommodation, sightseeing and transport options.",
        options: [
            "Family holidays",
            "Couple packages",
            "Group tours",
            "Luxury vacations"
        ],
        support: [
            "Itinerary planning",
            "Hotel suggestions",
            "Sightseeing arrangements",
            "Rental car and group transport options"
        ],
        charges: "Package prices vary by destination, duration, group size and selected services."
    },

    honeymoon: {
        title: "Honeymoon Trips",
        icon: "💍",
        subtitle: "Romantic travel experiences",
        description: "Plan a memorable honeymoon with beautiful destinations and personalized travel options.",
        options: [
            "Beach resort holidays",
            "Mountain retreats",
            "Private villa stays",
            "Romantic sightseeing experiences"
        ],
        support: [
            "Couple-friendly hotel suggestions",
            "Private transfer options",
            "Romantic dinner arrangements on request",
            "Customized honeymoon itineraries"
        ],
        charges: "Final pricing depends on the destination, hotel, activities and travel dates."
    },

    visa: {
        title: "Visa Assistance",
        icon: "🛂",
        subtitle: "Travel documentation guidance",
        description: "Get general assistance understanding visa application requirements and travel documents.",
        options: [
            "Tourist visa guidance",
            "Document checklist assistance",
            "Application process information",
            "Appointment preparation guidance"
        ],
        support: [
            "Passport validity reminders",
            "Supporting document information",
            "Official application website guidance",
            "General visa process assistance"
        ],
        charges: "Government visa fees and any assistance charges vary by destination and application type."
    },

    guidance: {
        title: "Travel Guidance",
        icon: "🧭",
        subtitle: "Personalized trip planning support",
        description: "Get help choosing destinations and planning a comfortable and enjoyable journey.",
        options: [
            "Destination recommendations",
            "Travel itinerary planning",
            "Budget planning",
            "Seasonal travel suggestions"
        ],
        support: [
            "Local transport suggestions",
            "Sightseeing recommendations",
            "Travel preparation checklist",
            "General trip assistance"
        ],
        charges: "Planning fees, if applicable, depend on the level of assistance requested."
    }
};

const params = new URLSearchParams(window.location.search);
const serviceId = params.get("service");
const selectedService = servicesData[serviceId];
const container = document.getElementById("serviceDetails");

if (!selectedService) {
    container.innerHTML = `
        <h1>Service not found</h1>
        <p>Please select a service from our Services page.</p>
    `;
} else {
    const makeList = items =>
        items.map(item => `<li>${item}</li>`).join("");

    const holidayLink = serviceId === "holiday"
        ? `<a class="service-detail-btn secondary"
              href="packages.html">Explore Tour Packages</a>`
        : "";

    container.innerHTML = `
        <section class="service-detail-hero">
            <span class="service-detail-icon">
                ${selectedService.icon}
            </span>
            <h1>${selectedService.title}</h1>
            <h3>${selectedService.subtitle}</h3>
            <p>${selectedService.description}</p>
        </section>

        <div class="service-detail-grid">
            <div class="service-info-card service-options">
                <h2>🌟 Available Options</h2>
                <ul>${makeList(selectedService.options)}</ul>
            </div>

            <div class="service-info-card service-support">
                <h2>🤝 How We Assist</h2>
                <ul>${makeList(selectedService.support)}</ul>
            </div>

            <div class="service-info-card service-charges">
                <h2>💰 Charges & Pricing</h2>
                <p>${selectedService.charges}</p>
            </div>
        </div>

        <div class="service-detail-actions">
            <a class="service-detail-btn"
               href="contact.html">
                Enquire Now →
            </a>
            ${holidayLink}
        </div>

        <p class="service-detail-note">
            Services are subject to availability and confirmation.
            Visa approvals are decided by the relevant authorities,
            not by WanderVista.
        </p>
    `;
}
