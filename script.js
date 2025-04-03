// Basic interaction for the debug console
const debugInput = document.getElementById('debug-input');
const debugSubmit = document.getElementById('debug-submit');
const debugOutput = document.getElementById('debug-output');

debugSubmit.addEventListener('click', () => {
    const inputText = debugInput.value;
    if (inputText.trim()) {
        // Simple echo for now, replace with actual processing logic
        debugOutput.textContent += `> ${inputText}\n`;
        // Placeholder for processing the input
        debugOutput.textContent += `Processed: ${inputText}\n`; // Example response
        debugInput.value = ''; // Clear input
        debugOutput.scrollTop = debugOutput.scrollHeight; // Scroll to bottom
    }
});

// Allow submitting with Enter key in the textarea
debugInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault(); // Prevent default newline insertion
        debugSubmit.click(); // Trigger button click
    }
});

console.log("TempleOS Web Port Initialized.");
// Future JavaScript for emulating TempleOS functionality will go here.
// This will involve parsing the HolyC code, simulating the OS environment,
// and rendering the output within the #templeos-screen element.

