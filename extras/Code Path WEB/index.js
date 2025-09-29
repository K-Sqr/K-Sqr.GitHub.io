/*** Dark Mode ***/
// Step 1: Select the button
const themeButton = document.getElementById("theme-button");

// Step 2: Write the callback function
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("dark-mode");
};

// Step 3: Add an event listener
themeButton.addEventListener("click", toggleDarkMode);


/*** Form Handling ***/
// Function to add a participant to the list
const addParticipant = () => {
    const nameInput = document.getElementById("rsvp-name");
    const stateInput = document.getElementById("rsvp-state");
    const emailInput = document.getElementById("rsvp-email");

    const name = nameInput.value;
    const state = stateInput.value;
    const email = emailInput.value;

    const rsvpList = document.getElementById("rsvp-list");
    const rsvpCount = document.getElementById("rsvp-count");

    const listItem = document.createElement("li");
    listItem.textContent = `${name} from ${state} is joining the crew. (Email: ${email})`;
    rsvpList.appendChild(listItem);

    const currentCount = parseInt(rsvpCount.textContent.split(" ")[0]);
    rsvpCount.textContent = `${currentCount + 1} space-coders are preparing to launch!`;

    // Clear form fields (This will be moved to validateForm in Project Part 7)
    // nameInput.value = "";
    // stateInput.value = "";
    // emailInput.value = "";
};


/*** Form Validation ***/
// Purpose:
// Prevents invalid form submissions from being added to the list of participants.
// When To Modify:
// [] Project 7 (REQUIRED FEATURE)
// [] Project 7 (STRETCH FEATURE)
// [] Project 9 (REQUIRED FEATURE)
// [] Any time between / after
// Step 1: We actually don't need to select the form button again we already did it in the
// Step 2: Write the callback function
const validateForm = () => {
    let containsErrors = false;
    var rsvpInputs = document.getElementById("rsvp-form").elements;

    // TODO: Loop through all inputs
    for (let i = 0; i < rsvpInputs.length; i++) {
        const input = rsvpInputs[i];
        // Only validate text and email inputs, not the submit button
        if (input.type === "text" || input.type === "email") {
            // TODO: Inside Loop, validate the value of each input
            if (input.value.length < 2) {
                containsErrors = true;
                input.classList.add("error"); // Add an error class attribute to this current input.
            } else {
                input.classList.remove("error"); // remove the error class attribute for the input.
            }
        }
    }

    // Stretch Feature: Validate email for '@' symbol
    const emailInput = document.getElementById("rsvp-email");
    if (emailInput.type === "email" && !emailInput.value.includes("@")) {
        containsErrors = true;
        emailInput.classList.add("error");
    } else if (emailInput.type === "email") {
        emailInput.classList.remove("error");
    }


    // TODO: If no errors, call addParticipant () and clear fields
    if (containsErrors == false) {
        addParticipant();
        // Clear fields
        for (let i = 0; i < rsvpInputs.length; i++) {
            const input = rsvpInputs[i];
            if (input.type === "text" || input.type === "email") {
                input.value = "";
            }
        }
    }
};

// Step 3: Replace the form button's event Listener with a new one that calls validateForm()
const rsvpButton = document.getElementById("rsvp-button");
rsvpButton.removeEventListener("click", addParticipant); // Remove the old listener
rsvpButton.addEventListener("click", validateForm); // Add the new listener