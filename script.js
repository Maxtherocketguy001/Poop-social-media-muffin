// Get the logo element
const logo = document.querySelector('#poop');

// Function to apply grayscale filter
function applyGrayscale() {
    logo.style.filter = 'grayscale(100%)';
}

// Function to remove grayscale filter
function removeGrayscale() {
    logo.style.filter = 'none';
}

// Add event listeners for mouseover and mouseout
logo.addEventListener('mouseover', applyGrayscale);
logo.addEventListener('mouseout', removeGrayscale);









// ============================================================

// Get the button element
const button = document.querySelector("#pee");

// Function to apply grayscale filter to button
function applyGrayscaleToButton() {
    button.style.filter = 'grayscale(100%)';
}

// Function to remove grayscale filter from button
function removeGrayscaleFromButton() {
    button.style.filter = 'none';
}

// Add event listeners for mouseover and mouseout on button
button.addEventListener('mouseover', applyGrayscaleToButton);
button.addEventListener('mouseout', removeGrayscaleFromButton);



// Get form elements
const form = document.querySelector('form');
const usernameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');

// Function to check credentials
function checkCredentials() {


    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === 'BASIS' && password === '1234!') {
	window.location.href = 'meme.html';
    }
    else if (username === 'TRUMP' && password === 'MakeAmericaGreatAgain') {
     
        window.location.href = 'profile.html';
        } else{
        window.location.href = 'ban.html';
        }
    
}

// Add event listener for form submission



