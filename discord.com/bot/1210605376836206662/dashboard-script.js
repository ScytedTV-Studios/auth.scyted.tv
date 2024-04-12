const currentURL = window.location.href;

document.addEventListener("DOMContentLoaded", function () {
    // Check if an access token is already stored
    const storedAccessToken = getCookie("accessToken");
    if (storedAccessToken) {
        // Redirect to the dashboard
        // window.location.href = "https://www.scyted.tv/dashboard";
    }

    const currentURL = window.location.href;

    // Check if the current URL does not contain either redirectUri= or error=
    if (!currentURL.includes('redirectUri=') && !currentURL.includes('error=invalidResource') && !currentURL.includes('error=invalidLogin') && !currentURL.includes('error=invalidAccess') && !currentURL.includes('error=fetchingUserData') && !currentURL.includes('redirect=')) {
        window.location.href = '?error=invalidResource';
        return; // Stop further execution
    }

    checkForError();
});

function redirectToDiscord() {
    const clientId = '1210605376836206662'; // Replace with your Discord application's client ID
    const currentURL = window.location.href;
    
    // Check if the current URL contains a redirect URI parameter
    if (!currentURL.includes('redirectUri=')) {
        window.location.href = '?error=invalidResource';
        return; // Stop further execution
    }
    
    // Extract the redirectUri parameter without encoding it
    const params = new URLSearchParams(currentURL.split('?')[1]);
    const redirectUri = params.get('redirectUri');
    
    const scope = 'role_connections.write+identify'; // Adjust scopes as needed

    const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=${scope}`;

    window.location.href = discordAuthUrl;
}

function isValidAccessToken(token) {
    // Add your validation logic here
    // Return true if the token is valid, otherwise return false
    return true; // Placeholder, replace with actual validation
}

function clearCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function displayErrorMessage(message) {
    const errorMessageDiv = document.getElementById("errorMessage");
    errorMessageDiv.textContent = message;
}

function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        if (cookie[0] === name) {
            return cookie[1];
        }
    }
    return null;
}

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'G-LF3ZTHGQHE');

function checkForError() {
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('error') && urlParams.get('error') === 'invalidAccess') {
        // Create line breaks
        var lineBreak1 = document.createElement('br');
        // Create error message
        var errorMessage = document.createElement('p');
        errorMessage.textContent = "Error: Your account does not have access to this item. If this seems incorrect, contact support.";
        errorMessage.style.color = "red";
        // Append line breaks and error message below the button
        var errorMessageContainer = document.getElementById('error-message');
        errorMessageContainer.appendChild(lineBreak1);
        errorMessageContainer.appendChild(errorMessage);
    }

    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('error') && urlParams.get('error') === 'invalidLogin') {
        // Create line breaks
        var lineBreak1 = document.createElement('br');
        // Create error message
        var errorMessage = document.createElement('p');
        errorMessage.textContent = "Error: You aren't logged in, please login and try again.";
        errorMessage.style.color = "red";
        // Append line breaks and error message below the button
        var errorMessageContainer = document.getElementById('error-message');
        errorMessageContainer.appendChild(lineBreak1);
        errorMessageContainer.appendChild(errorMessage);
    }

    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('error') && urlParams.get('error') === 'fetchingUserData') {
        // Create line breaks
        var lineBreak1 = document.createElement('br');
        // Create error message
        var errorMessage = document.createElement('p');
        errorMessage.textContent = "Error: We were unable to fetch your user data. Contact support for further help.";
        errorMessage.style.color = "red";
        // Append line breaks and error message below the button
        var errorMessageContainer = document.getElementById('error-message');
        errorMessageContainer.appendChild(lineBreak1);
        errorMessageContainer.appendChild(errorMessage);
    }
}