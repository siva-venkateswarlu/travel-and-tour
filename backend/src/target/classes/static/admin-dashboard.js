

const API_URL = "/api/bookings";

const bookingTable = document.getElementById("bookingTable");
const refreshBtn = document.getElementById("refreshBtn");

// ==========================================
// 1. LOAD ALL BOOKINGS
// ==========================================
async function loadBookings() {

    bookingTable.innerHTML = `
        <tr>
            <td colspan="8">Loading bookings...</td>
        </tr>
    `;

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to load bookings");
        }

        const bookings = await response.json();

        // Update dashboard statistics
        document.getElementById("totalBookings").textContent =
            bookings.length;

        document.getElementById("pendingBookings").textContent =
            bookings.filter(b =>
                (b.status || "").toUpperCase() === "PENDING"
            ).length;

        document.getElementById("acceptedBookings").textContent =
            bookings.filter(b =>
                (b.status || "").toUpperCase() === "ACCEPTED"
            ).length;

        document.getElementById("cancelledBookings").textContent =
            bookings.filter(b =>
                (b.status || "").toUpperCase() === "CANCELLED"
            ).length;

        bookingTable.innerHTML = "";

        if (bookings.length === 0) {
            bookingTable.innerHTML = `
                <tr>
                    <td colspan="8">No bookings found</td>
                </tr>
            `;
            return;
        }

        // Display booking records
        bookings.forEach(booking => {

            const row = document.createElement("tr");

            const status = (booking.status || "")
                .trim()
                .toUpperCase();

            const values = [
                booking.id,
                booking.name,
                booking.email,
                booking.destination,
                booking.travelDate,
                booking.travelers
            ];

            values.forEach(value => {
                const cell = document.createElement("td");
                cell.textContent = value ?? "-";
                row.appendChild(cell);
            });

            // ==================================
            // STATUS COLUMN
            // ==================================
            const statusCell = document.createElement("td");

            const statusBadge = document.createElement("span");

            statusBadge.className =
                "status-badge " + status.toLowerCase();

            statusBadge.textContent = status || "NOT SET";

            statusCell.appendChild(statusBadge);
            row.appendChild(statusCell);

            // ==================================
            // ACTIONS COLUMN
            // ==================================
            const actionCell = document.createElement("td");

            if (status === "PENDING") {

                const acceptBtn = document.createElement("button");
                acceptBtn.textContent = "Accept";
                acceptBtn.className = "accept-btn";

                acceptBtn.addEventListener("click", () => {
                    updateBookingStatus(booking.id, "accept");
                });

                const cancelBtn = document.createElement("button");
                cancelBtn.textContent = "Cancel";
                cancelBtn.className = "cancel-btn";

                cancelBtn.addEventListener("click", () => {
                    updateBookingStatus(booking.id, "cancel");
                });

                actionCell.appendChild(acceptBtn);
                actionCell.appendChild(cancelBtn);

            } else {
                actionCell.textContent = "-";
            }

            row.appendChild(actionCell);
            bookingTable.appendChild(row);
        });

    } catch (error) {
        console.error("Load bookings error:", error);

        bookingTable.innerHTML = `
            <tr>
                <td colspan="8">
                    Unable to load bookings. Check your backend.
                </td>
            </tr>
        `;
    }
}

// ==========================================
// 2. ACCEPT OR CANCEL BOOKING
// ==========================================
async function updateBookingStatus(id, action) {

    if (action !== "accept" && action !== "cancel") {
        return;
    }

    const actionName =
        action === "accept" ? "accept" : "cancel";

    const confirmed = confirm(
        `Are you sure you want to ${actionName} booking #${id}?`
    );

    if (!confirmed) {
        return;
    }

    // Disable action buttons while request is running
    const buttons = bookingTable.querySelectorAll(
        ".accept-btn, .cancel-btn"
    );

    buttons.forEach(button => {
        button.disabled = true;
    });

    try {
        const response = await fetch(
            `${API_URL}/${id}/${action}`,
            {
                method: "PUT"
            }
        );

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(
                errorMessage || "Failed to update booking"
            );
        }

        alert(
            `Booking #${id} ${
                action === "accept" ? "accepted" : "cancelled"
            } successfully!`
        );

    } catch (error) {
        console.error("Update booking error:", error);

        alert(
            "Unable to update booking: " + error.message
        );

    } finally {
        await loadBookings();
    }
}

// ==========================================
// 3. REFRESH BUTTON
// ==========================================
refreshBtn.addEventListener("click", loadBookings);

// ==========================================
// 4. LOAD BOOKINGS WHEN PAGE OPENS
// ==========================================
loadBookings();

