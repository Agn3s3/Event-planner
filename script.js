const registerBtn = document.getElementById("registerBtn");
const guestList = document.getElementById("guestList");
const guestCount = document.getElementById("guestCount");

let guests = [];

// Register guest
registerBtn.addEventListener("click", () => {
  const nameInput = document.getElementById("name");
  const surnameInput = document.getElementById("surname");

  const name = nameInput.value.trim();
  const surname = surnameInput.value.trim();

  if (name === "" || surname === "") {
    alert("Please enter both name and surname.");
    return;
  }

  guests.push({
    name,
    surname,
  });

  renderGuests();

  nameInput.value = "";
  surnameInput.value = "";
});

// Render guests
function renderGuests() {
  guestList.innerHTML = "";

  guests.forEach((guest) => {
    const guestCard = document.createElement("div");

    guestCard.classList.add("guest-card");

    guestCard.innerHTML = `
      <div>
        <strong>${guest.name} ${guest.surname}</strong>
        <p>Registered attendee</p>
      </div>

      <div class="online-dot"></div>
    `;

    guestList.appendChild(guestCard);
  });

  guestCount.innerText = guests.length;
}
