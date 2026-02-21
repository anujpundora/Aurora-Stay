const bookingContainer = document.getElementById("bookingDetails");

const bookingData = localStorage.getItem("booking");

if (bookingData) {
    const booking = JSON.parse(bookingData);

    bookingContainer.innerHTML = `
        <p><strong>Name:</strong> ${booking.name}</p>
        <p><strong>Email:</strong> ${booking.email}</p>
        <p><strong>Phone:</strong> ${booking.phone}</p>
        <p><strong>Room:</strong> ${booking.room}</p>
        <p><strong>Check-in:</strong> ${booking.checkin}</p>
        <p><strong>Check-out:</strong> ${booking.checkout}</p>
        <p><strong>Guests:</strong> ${booking.guests}</p>
    `;
} else {
    bookingContainer.innerHTML = `
        <p class="text-red-600 font-semibold text-center">
            No booking found. Please make a reservation first.
        </p>
    `;
}