const form = document.getElementById("bookingForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const room = document.getElementById("room").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const guests = document.getElementById("guests").value;

    if (checkin >= checkout) {
        alert("Check-out date must be after check-in date.");
        return;
    }

    const bookingData = {
        name,
        email,
        phone,
        room,
        checkin,
        checkout,
        guests
    };

    localStorage.setItem("booking", JSON.stringify(bookingData));

    window.location.href = "confirmation.html";
});