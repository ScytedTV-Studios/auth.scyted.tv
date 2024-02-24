// Function to replace content in the div with id "fullpage"
function replaceContent() {
    const currentURL = window.location.href;

    // Check if URL contains "?error=invalidResource"
    if (currentURL.includes('error=invalidResource')) {
        // Replace content of the div with the provided code
        var fullpageDiv = document.getElementById("fullpage");
        fullpageDiv.innerHTML = `
        <style>
        hr.has-background-black {
            display: none;
        }
    
        h1.title {
            display: none;
        }
    
        pre {
            position: absolute;
            top: 0;
            left: 0;
            margin: 0;
            padding: 20px;
            text-align: left;
            vertical-align: top;
            background: #000000;
            color: #fff;
        }
    
        body {
            background: #000000;
        }
    
    </style>

            <pre>
            {
              "error": {
                "code": 400,
                "message": "Bad Request",
                "details": "The request cannot be processed because the URI is missing or invalid. Please provide a valid URI."
              }
            }
            </pre>
        `;
    }
}

// Call replaceContent function when the page loads
window.onload = replaceContent;