function detectOperatingSystem() {
    const userAgent = window.navigator.userAgent;

    if (userAgent.indexOf("Win") !== -1) {
        return "Windows";
    } else if (userAgent.indexOf("Mac") !== -1) {
        return "MacOS";
    } else if (userAgent.indexOf("X11") !== -1 || userAgent.indexOf("Linux") !== -1) {
        return "Linux";
    } else if (userAgent.indexOf("Android") !== -1) {
        return "Android";
    } else if (userAgent.indexOf("like Mac") !== -1) {
        return "iOS";
    } else {
        return "Unknown OS";
    }
}

// Example usage
const os = detectOperatingSystem();
console.log("Detected Operating System:", os);

// Redirect to error.html if not Windows

if (os !== "Windows") {
    window.location.href = "error.html";
}





function checkScreenWidth() {
    const screenWidth = window.innerWidth;

    // Define the maximum width for tablets (e.g., 768px)
    const maxTabletWidth = 768;

    // console.log(screenWidth)
    // Check if the screen width is less than or equal to the maxTabletWidth
    if (screenWidth <= maxTabletWidth) {
        // Redirect to error.html
        window.location.href = "error.html";
    }
}

// Call the function to check screen width
checkScreenWidth();



function scrolll(text){
    const ele = document.getElementById(text);
    ele.scrollIntoView({ behavior: 'smooth' });
}