var contextMenu = null; // Variable to store the context menu

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();

    // Check if the context menu already exists, if not, create a new one
    if (!contextMenu) {
        contextMenu = document.createElement('div');

        // Create the "Apps" button
        var appsButton = createContextMenuButton('Apps');
        contextMenu.appendChild(appsButton);

        // Create the "Games" button
        var gamesButton = createContextMenuButton('Games');
        contextMenu.appendChild(gamesButton);

        // Create the "Settings" button
        var settingsButton = createContextMenuButton('Settings');
        contextMenu.appendChild(settingsButton);

        contextMenu.style.position = 'absolute';
        contextMenu.style.background = 'black';
        contextMenu.style.color = 'white';
        contextMenu.style.border = '2px solid white';
        contextMenu.style.borderRadius = '5px';
        contextMenu.style.padding = '10px';
        contextMenu.style.cursor = 'pointer';
        contextMenu.style.width = '120px';
        contextMenu.style.opacity = '0.8';

        document.body.appendChild(contextMenu);

        contextMenu.addEventListener('click', function(e) {
            // Identify which button was clicked
            var buttonText = e.target.innerHTML;

            // Perform actions based on the clicked button
            if (buttonText === 'Apps') {
                window.location.href = 'apps.html'; // Redirect to apps.html
            } else if (buttonText === 'Games') {
                window.location.href = 'learning.html'; // Redirect to learning.html
            } else if (buttonText === 'Settings') {
                alert('This is still being made in progress. Please be patient.');
            }

            document.body.removeChild(contextMenu);
            contextMenu = null; // Reset the context menu variable
        });

        document.addEventListener('click', function() {
            if (contextMenu && contextMenu.parentNode) {
                document.body.removeChild(contextMenu);
                contextMenu = null; // Reset the context menu variable
            }
        });
    }

    // Set the position of the context menu at the clicked coordinates
    contextMenu.style.left = (event.pageX + 5) + 'px';
    contextMenu.style.top = (event.pageY + 5) + 'px';
});

// Function to create a context menu button
function createContextMenuButton(text) {
    var button = document.createElement('div');
    button.innerHTML = text;
    button.style.marginBottom = '5px';
    button.style.textAlign = 'center';
    button.style.padding = '8px';
    return button;
}

// Changing Font Description
const randomDescriptionElement = document.createElement('div');
randomDescriptionElement.style.fontSize = '1em';
randomDescriptionElement.style.marginTop = '5px'; // Adjusted margin top
randomDescriptionElement.style.textAlign = 'center'; // Centered text
document.body.appendChild(randomDescriptionElement);

function getRandomDescription() {
    const descriptions = [
        "Did you know if you right-click, more options will appear!",
        "This is still being made in progress, how do you like it?",
        "Did you know this proxy was made by a 15-year-old?",
        "In my school, I am known as the hacker kid what others may call me" 
    ];
    const randomIndex = Math.floor(Math.random() * descriptions.length);
    return descriptions[randomIndex];
}

function setRandomDescription() {
    const newDescription = getRandomDescription();
    randomDescriptionElement.textContent = newDescription;
}

setInterval(setRandomDescription, 5000); // Change description every 5 seconds
setRandomDescription(); // Initial description

// Live Timer
const timerElement = document.createElement('div');
timerElement.style.fontSize = '1.2em';
timerElement.style.fontWeight = 'bold';
timerElement.style.textAlign = 'center'; // Centered text
timerElement.style.marginTop = '5px'; // Adjusted margin top
document.body.appendChild(timerElement);

function updateTimer() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;

    const formattedTime = `${padZero(formattedHours)}:${padZero(minutes)}:${padZero(seconds)} ${ampm}`;
    timerElement.textContent = formattedTime;
}

function padZero(num) {
    return num < 10 ? `0${num}` : num;
}

setInterval(updateTimer, 1000);
updateTimer(); // Initial update
