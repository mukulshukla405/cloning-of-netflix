const movies = [
    {
        title: "The Batman",
        image: "batman.jpg",
        trailer: "THE_BATMAN_trailer.mp4"
    },
    {
        title: "Stranger Things",
        image: "stranger_things.jpg",
        trailer: "Stranger_Things_trailer.mp4"
    },
    {
        title: "Inception",
        image: "inception.jpg",
        trailer: "inception_trailer.mp4"
    },
    {
        title: "Harry Potter",
        image: "harry_potter.jpg",
        trailer: "harry_potter_trailer.mp4"
    }
    // Add more movie objects here
];

// Function to populate the movies section
function populateMovies() {
    const moviesContainer = document.getElementById('moviesContainer');
    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.className = 'movie-item';
        movieItem.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}" onclick="playTrailer('${movie.trailer}')">
            <p>${movie.title}</p>
        `;
        moviesContainer.appendChild(movieItem);
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

