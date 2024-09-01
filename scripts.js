// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add more interactivity here as needed
// Audio Play Notification
const audioPlayer = document.querySelector('.audio-content audio');

audioPlayer.addEventListener('play', () => {
    alert('Now playing: The Future of Biotechnology');
});


// Initialize the map and set its view to a default location and zoom level
const map = L.map('mapid').setView([51.505, -0.09], 13);

// Add a tile layer to the map (this is the map's base layer)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker to the map at the default location
L.marker([51.505, -0.09]).addTo(map)
    .bindPopup('Default location<br> You can change this location.')
    .openPopup();
