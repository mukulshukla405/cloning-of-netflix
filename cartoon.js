const cartoons = [
    {
        title: "Ben 10",
        image: "b10.jpg",
        trailer: "Ben 10 Theme Song Hindi _ HD.mp4"
    },
    {
        title: "Mr.Bean",
        image: "mr_bean.jpg",
        trailer: "Mr. Bean Animated Series Theme Song [HD].mp4"
    },
    {
        title: "Doreamon",
        image: "doremon.jpg",
        trailer: "Doraemon _ Teaser.mp4"
    },
    {
        title: "Chhota Bheem",
        image: "bheem.jpg",
        trailer: "Chota bheem tamil theme song.mp4"
    }
    // Add more movie objects here
];

// Function to populate the movies section
function populateMovies() {
    const cartoonsContainer = document.getElementById('CartoonContainer');
    cartoons.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.className = 'movie-item';
        movieItem.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}" onclick="playTrailer('${movie.trailer}')">
            <p>${movie.title}</p>
        `;
        cartoonsContainer.appendChild(movieItem);
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
