// Object to store reserved seat information
var reservedSeats = {
  record1: {
    seat: "b19",
    owner: {
      fname: "Joe",
      lname: "Smith",
    },
  },
  record2: {
    seat: "b20",
    owner: {
      fname: "Joe",
      lname: "Smith",
    },
  },
  record3: {
    seat: "b21",
    owner: {
      fname: "Joe",
      lname: "Smith",
    },
  },
  record4: {
    seat: "b22",
    owner: {
      fname: "Joe",
      lname: "Smith",
    },
  },
};

/**
 * Creates rows of seats for a theater section
 * @param {number} sectionLength - Number of seats in each row of the section
 * @param {number} rowLength - Total number of seats in each row across all sections
 * @param {string} placement - Section position ('left', 'right', or 'middle')
 */
function makeRows(sectionLength, rowLength, placement) {
  // Array of row labels from A to T
  const rows = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
  ];

  let html = "";
  let counter = 1;

  rows.forEach((row) => {
    // Handle the start of each row based on section placement
    switch (placement) {
      case "left":
        html += `<div class="label">${row}</div>`; // Add row label for left section
        break;
      case "right":
        counter = counter + (rowLength - sectionLength); // Skip middle seats
        break;
      default: // middle section
        counter = counter + (rowLength - sectionLength) / 2; // Skip left seats
        break;
    }

    // Generate seats for this section
    for (let i = 0; i < sectionLength; i++) {
      html += `<div class="a" id="${row + counter}">${counter}</div>`;
      counter++;
    }

    // Handle the end of each row based on section placement
    switch (placement) {
      case "left":
        counter = counter + (rowLength - sectionLength); // Skip remaining seats
        break;
      case "right":
        html += `<div class="label">${row}</div>`; // Add row label for right section
        break;
      default: // middle section
        counter = counter + (rowLength - sectionLength) / 2; // Skip right seats
        break;
    }
  });
  document.getElementById(placement).innerHTML = html;
}

// Create the three seating sections
makeRows(3, 15, "left");
makeRows(9, 15, "middle");
makeRows(3, 15, "right");

// IIFE to handle seat selection and reservation
(function () {
  "use strict";

  let selectedSeats = []; // Array to store currently selected seats
  const seats = document.querySelectorAll(".a");

  // Mark previously reserved seats
  for (const key in reservedSeats) {
    if (reservedSeats.hasOwnProperty(key)) {
      const obj = reservedSeats[key];
      document.getElementById(obj.seat).className = "r";
      document.getElementById(obj.seat).innerHTML = "R";
    }
  }

  // Add click handlers to all available seats
  seats.forEach((seat) => {
    seat.addEventListener("click", () => {
      seatSelectionProcess(seat.id);
    });
  });

  /**
   * Handles the selection/deselection of seats
   * @param {string} thisSeat - ID of the clicked seat
   */
  function seatSelectionProcess(thisSeat) {
    if (!document.getElementById(thisSeat).classList.contains("r")) {
      const index = selectedSeats.indexOf(thisSeat);

      if (index > -1) {
        // Deselect the seat
        selectedSeats.splice(index, 1);
        document.getElementById(thisSeat).className = "a";
      } else {
        // Select the seat
        selectedSeats.push(thisSeat);
        document.getElementById(thisSeat).className = "s";
      }
      manageConfirmForm();
    }
  }

  // Show reservation form
  document.getElementById("reserve").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("resform").style.display = "block";
  });

  // Hide reservation form
  document.getElementById("cancel").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("resform").style.display = "none";
  });

  /**
   * Updates the confirmation form based on selected seats
   */
  function manageConfirmForm() {
    if (selectedSeats.length > 0) {
      document.getElementById("confirmres").style.display = "block";
      if (selectedSeats.length === 1) {
        document.getElementById(
          "selectedseats"
        ).innerHTML = `You have selected seat ${selectedSeats[0]} `;
      } else {
        // Format multiple seat selections with proper grammar
        let seatString = selectedSeats.toString();
        seatString = seatString.replace(/,/g, ", ");
        seatString = seatString.replace(/,(=[^,]*$)/, " and");
        document.getElementById(
          "selectedseats"
        ).innerHTML = `You have selected seats ${seatString} `;
      }
    } else {
      // Show error if no seats are selected
      document.getElementById("confirmres").style.display = "none";
      document.getElementById("selectedseats").innerHTML =
        "You need to select some seats to reserve. <br><a href='#' id='error'>Close</a> this dialog box pick at least one seat";
      document.getElementById("error").addEventListener("click", () => {
        document.getElementById("resform").style.display = "none";
      });
    }
  }
  manageConfirmForm();

  // Handle form submission
  document.getElementById("confirmres").addEventListener("submit", (e) => {
    processReservation();
    e.preventDefault();
  });

  /**
   * Processes the reservation form and updates the seat status
   */
  function processReservation() {
    const hardCodeRecords = Object.keys(reservedSeats).length;
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    let counter = 1;
    let nextRecord = "";

    // Update each selected seat to reserved status
    selectedSeats.forEach((thisSeat) => {
      document.getElementById(thisSeat).className = "r";
      document.getElementById(thisSeat).innerHTML = "R";

      // Add new reservation to reservedSeats object
      nextRecord = `record ${hardCodeRecords + counter}`;
      reservedSeats[nextRecord] = {
        seat: thisSeat,
        owner: {
          fname: fname,
          lname: lname,
        },
      };
      counter++;
    });

    // Reset the form
    document.getElementById("resform").style.display = "none";
    selectedSeats = [];
    manageConfirmForm();
  }
})();

/* function leftTab() {
  rows.forEach((row) => {
    html += `<div class="label">${row}</div>`;
    for (let i = 0; i < 3; i++) {
      html += `<div id="${row + counter}">${counter}</div>`;
      counter++;
    }
    counter = counter + 12;
  });

  document.getElementById("left").innerHTML = html;
}
leftTab();

html = "";
counter = 1;

function rightTab() {
  rows.forEach((row) => {
    counter = counter + 12;
    for (let i = 0; i < 3; i++) {
      html += `<div id="${row + counter}">${counter}</div>`;
      counter++;
    }
    html += `<div class="label">${row}</div>`;
  });

  document.getElementById("right").innerHTML = html;
}
rightTab();

html = "";
counter = 1;

function middleTab() {
  rows.forEach((row) => {
    counter = counter + 3;
    for (let i = 0; i < 9; i++) {
      html += `<div id="${row + counter}">${counter}</div>`;
      counter++;
    }
    counter = counter + 3;
  });

  document.getElementById("middle").innerHTML = html;
}
middleTab(); */
