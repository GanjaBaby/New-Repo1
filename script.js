var allowNoButtonClick = true;

function moveNoButton() {
    if (allowNoButtonClick) {
        var noButton = document.getElementById("noButton");
        
        // Calculate the maximum X and Y coordinates considering the button's width and height
        var maxX = window.innerWidth - noButton.clientWidth;
        var maxY = window.innerHeight - noButton.clientHeight;

        // Generate random X and Y coordinates within the visible area
        var randomX = Math.floor(Math.random() * maxX);
        var randomY = Math.floor(Math.random() * maxY);

        noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }
}


function preventClick() {
    if (allowNoButtonClick) {
        alert("You clicked 'No', but you need to click 'Yes' first!");
    }
}

function allowClick() {
    allowNoButtonClick = false;
    var noButton = document.getElementById("noButton");
    noButton.style.transform = "translate(0)";

    // Add a class to the body for transition effect
    document.body.classList.add('transitioning');

    // Redirect to the new date_page.html after a delay
    setTimeout(function () {
        window.location.href = "date_page.html";
    }, 500);
}

// Start playing the audio when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Start playing the audio
    startAudio();
});

function startAudio() {
    var audio = document.getElementById("backgroundAudio");
    
    if (audio) {
        // Check if the audio is loaded before attempting to play
        audio.addEventListener('canplaythrough', function() {
            // Unmute and set volume
            audio.muted = false;
            audio.volume = 0.5; // Adjust the volume as needed

            // Play the audio
            audio.play()
                .then(function() {
                    console.log("Audio is playing");
                })
                .catch(function(error) {
                    console.error("Error playing audio:", error);
                });
        });
        
        // If the audio is not supported or encountered an error
        audio.addEventListener('error', function(error) {
            console.error("Audio error:", error);
        });
    }
}
