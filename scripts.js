const series = [
    {
        title: "Kota Factory",
        image: "kotafactory.jpg",
        trailer: "kotafactory.mp4"
    },
    {
        title: "Money Heist",
        image: "money_heist.jpg",
        trailer: "Money Heist _ Series Trailer _ Netflix.mp4"
    },
    {
        title: "Lucifer",
        image: "lucifer.jpg",
        trailer: "Official Trailer _ Season 1 _ LUCIFER.mp4"
    },
    {
        title: "Peaky Blinders",
        image: "peaky_blinders.jpg",
        trailer: "Peaky Blinders - Season 1 _ Trailer.mp4"
    }
    // Add more movie objects here
];

// Function to populate the movies section
function populateMovies() {
    const seriesContainer = document.getElementById('seriesContainer');
    series.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.className = 'movie-item';
        movieItem.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}" onclick="playTrailer('${movie.trailer}')">
            <p>${movie.title}</p>
        `;
        seriesContainer.appendChild(movieItem);
    });
}

// Function to show the trailer section
function playTrailer(trailerUrl) {
    const trailerSection = document.getElementById('trailerSection');
    const trailerVideo = document.getElementById('trailerVideo');
    trailerVideo.src = trailerUrl;
    trailerVideo.play();  // Start playing the trailer
    trailerVideo.loop = true;  // Enable loop to replay the trailer automatically
    trailerSection.style.display = 'flex';
}

// Function to close the trailer section
function closeTrailer() {
    const trailerSection = document.getElementById('trailerSection');
    const trailerVideo = document.getElementById('trailerVideo');
    trailerVideo.pause();  // Pause the video
    trailerVideo.currentTime = 0;
    trailerVideo.src = '';
    trailerSection.style.display = 'none';
}

// Populate movies on page load
document.addEventListener('DOMContentLoaded', populateMovies);
