document.addEventListener('click', function() {
    document.body.style.opacity = 0; // Start fading
    setTimeout(function() {
        window.location.href = "login_page.html"; // Replace with your next page URL
    }, 350); // Wait for the fade-out duration (0.5s)
});
