function trackOrders() {
    // Get user input and split it into an array of flavors
    const inputElement = document.getElementById("flavorInput");
    const userInput = inputElement.value;
    const flavors = userInput.split(",");

    // Create an object to track the counts of each flavor
    const flavorCounts = {};

    // Iterate through the array of flavors and count them
    for (const flavor of flavors) {
        const trimmedFlavor = flavor.trim(); // Remove leading/trailing spaces
        if (flavorCounts[trimmedFlavor]) {
            flavorCounts[trimmedFlavor]++;
        } else {
            flavorCounts[trimmedFlavor] = 1;
        }
    }

    // Display the results
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = "<h2>Order Summary:</h2>";
    for (const flavor in flavorCounts) {
        resultElement.innerHTML += `<p>${flavor}: ${flavorCounts[flavor]}</p>`;
    }
}
